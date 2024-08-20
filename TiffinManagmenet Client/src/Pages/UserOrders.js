import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import NavUser from '../Components/navUser';

const UserOrders = () => {
  // Initialize with static data
  // const [orders, setOrders] = useState([
  //   {
  //     id: '1',
  //     details: 'Order 1: 2x Veg Thali',
  //   },
  // ]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchUserOrders();
  }, []);

  const fetchUserOrders = async () => {
    try {
      const token = localStorage.getItem('jwt'); // Use 'jwt' to match your storage key
      const userId = localStorage.getItem('id');

      if (!userId || !token) {
        toast.error('User ID or token not found. Please log in again.');
        navigate('/signin');
        return;
      }

      const response = await axios.get(`http://localhost:8444/order/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      setOrders(response.data);
    } catch (error) {
      toast.error('fetched orders');
    }
  };

  const handleDelete = async (orderId) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      try {
        const token = localStorage.getItem('jwt');
        await axios.delete(`http://localhost:8444/order/${orderId}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        toast.success('Order deleted successfully');
        fetchUserOrders(); // Refresh the order list
      } catch (error) {
        toast.error('Failed to delete order');
      }
    }
  };

  return (
    <div>
          <NavUser></NavUser>

    <div className="container mt-4">
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Order Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.details}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(order.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </div>
  );
};

export default UserOrders;
