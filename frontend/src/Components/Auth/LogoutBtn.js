import axios from 'axios'
import React, { useContext } from 'react'
import  { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext'

export default function LogoutBtn() {
    const navigate = useNavigate();
    const {getLoggedIn}=useContext(AuthContext);
    async function Logout(){
    await axios.get("http://localhost:3000/api/logout")
    await getLoggedIn();
    navigate('/');
    
    }
  return (
    <button className='btn btn-light' style={{backgroundColor : '#c00407', borderRadius : '25px',
     color : '#fff',border : '1px solid #555'}} onClick={Logout}>Logout</button>
  )
}
