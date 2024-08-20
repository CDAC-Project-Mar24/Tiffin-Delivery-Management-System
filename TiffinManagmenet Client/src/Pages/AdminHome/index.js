import axios from 'axios'
import { useEffect, useState } from 'react'
import DaywiseOrder from '../../Components/DaywiseOrder'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router'
import NavAdmin from '../../Components/navAdmin'
import Footcomponent from '../../Components/footer'
import config from '../../config'
import { toast } from 'react-toastify'

const AdminHome = () => {
  const { state } = useLocation('')
  const [daywiseOrder, setdayWiseorder] = useState([])
  const [daywisedispatched, setdaywisedispatched] = useState([])
  const [daywisedelivered, setdaywisedelivered] = useState([])
  
  const navigate = useNavigate()
  const Logout = () => {
    localStorage['id'] = null
    console.log(localStorage['id'])
    localStorage['loginStatus'] = null
    navigate('/signin')
  }


  return (
    <div>
      <NavAdmin></NavAdmin>
     
      <br />
      <br />
      <div className='container-fluid'>
        <div className='row'>
          
          <div className='col-md-2'></div>
        </div>
        
      </div>
     <h1> Welcome To Tiffin Delivery and Managment System</h1>
    </div>
  )
}
export default AdminHome
