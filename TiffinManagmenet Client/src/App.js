import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Signin from './Pages/Signin'
import Signup from './Pages/signup'

import Aboutus from './Components/aboutus'
import ActiveCustomers from './Pages/ActiveCustomers'
import AddDeliveryBoy from './Pages/Add DeliveryBoy'
import AdminHome from './Pages/AdminHome/index'
import AssignOrders from './Pages/AssignOrders'
import CustomerListAdmin from './Pages/CustomerListAdmin'
import DeliveredOrders from './Pages/DeliveredOrdersAdmin'
import DeliveryDetails from './Pages/DeliveryBoyHome.js'
import DeliveryBoyManagement from './Pages/DeliveryBoyManagement'
import DispatchedOrdersAdmin from './Pages/dispatchedOrdersAdmin/index'

//import AddTiffin from "./components/tiffindetails/addtiffin";
import Order from './Pages/Tiffin/tiffindetails/order'
import ShowTiffins from './Pages/Tiffin/tiffindetails/showtiffins'
//import Description from './components/tiffindetails/description';
import AdminDeliveryManagement from './Pages/AdminDeliveryAddressMangement'
import DeliveryAddressList from './Pages/AdminDeliveryAddressMangement/DeliveryAddressList'
import Admintiffin from './Pages/Admintiffin'
import EditTiffin from './Pages/Tiffin/edit tiffin/editTiffin'
import TiffinDetailsData from './Pages/Tiffin/edit tiffin/tiffinDetailsData'
import EditUser from './Pages/Tiffin/edit user/editUser'
import Address from './Pages/Tiffin/tiffindetails/address'
import AddTiffin from './Pages/Tiffin/tiffindetails/addtiffin'
import Description from './Pages/Tiffin/tiffindetails/description'
import Test from './Pages/Tiffin/tiffindetails/test'
import UserProfile from './Pages/Tiffin/user profile/userProfile'
import SetPayment from './Pages/Tiffin/userPayment/payment'
import UserOrders from './Pages/UserOrders';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/orders' element={<UserOrders />} />
          <Route path='/' element={<Signin />} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/Signup' element={<Signup />} />

          <Route path='/AssignOrders' element={<AssignOrders />} />
          <Route path='/Admin' element={<AdminHome />} />
          <Route path='/Delivery' element={<DeliveryDetails />} />
          <Route path='/DispatchedOrders' element={<DispatchedOrdersAdmin />} />
          <Route path='/DeliveredOrders' element={<DeliveredOrders />} />
          <Route
            path='/DeliveryBoyManagement'
            element={<DeliveryBoyManagement />}
          />
          <Route path='/CustomerListAdmin' element={<CustomerListAdmin />} />
          <Route path='/ActiveCustomers' element={<ActiveCustomers />} />
          <Route path='/Aboutus' element={<Aboutus />} />
          <Route path='/AddDeliveryBoy' element={<AddDeliveryBoy />} />
          <Route path='/AdminTiffin' element={<Admintiffin />} />
          <Route
            path='/AdminDeliveryAddrees'
            element={<AdminDeliveryManagement />}
          />
          <Route path='/AddressList' element={<DeliveryAddressList />} />
          <Route path='/tiffin' element={<AddTiffin />} />
          <Route path='/showTiffin' element={<ShowTiffins />} />
          <Route path='/order' element={<Order />} />
          <Route path='/payment' element={<SetPayment />} />
          <Route path='/test' element={<Test />} />
          <Route path='/address' element={<Address />} />
          <Route path='/description' element={<Description />} />
          <Route path='/userProfile' element={<UserProfile />} />
          <Route path='/editUser' element={<EditUser />} />
          <Route path='/editTiffin' element={<EditTiffin />} />
          <Route path='/tiffinDetailsData' element={<TiffinDetailsData />} />
          <Route path='/addtiffin' element={<AddTiffin />} />
        </Routes>
        {/* <br />
        <br /> 
        <hr />
        <Footcomponent />*/}
      </BrowserRouter>
      <ToastContainer position='top-right' theme='colored' />
    </div>
  )
}

export default App
