import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

const NavAdmin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear(); // Clear all session storage
    navigate('/signin');
  };

  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/Admin">
          <h2 className="text-white font-weight-bold">Admin Dashboard</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/DeliveryBoyManagement" className="text-white mx-2">
              Manage User
            </Nav.Link>
            <Nav.Link as={Link} to="/CustomerListAdmin" className="text-white mx-2">
              Manage Customers
            </Nav.Link>
            <Nav.Link as={Link} to="/AdminTiffin" className="text-white mx-2">
              Manage Tiffin
            </Nav.Link>
            <Nav.Link as={Link} to="/AdminDeliveryAddrees" className="text-white mx-2">
              Manage Address
            </Nav.Link>
          </Nav>
          <Button variant="outline-light" className="ml-3" onClick={handleLogout}>
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavAdmin;

