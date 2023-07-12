import React,{useContext} from 'react'
import { loginContext } from '../contexts/loginContext'
import './UserProfile.css'
import { NavLink ,Outlet} from 'react-router-dom'

 

function UserProfile() {
  let [currentUser]=useContext(loginContext)
  const activeLink = {
    color: "#00FFFF",
    fontWeight: "bold",
    fontSize: "1.2rem",
  };
  return (
    <div>
      <p className="display-4 text-end">Welcome {currentUser.username}</p>
      <p className="display-4 text-end"><small> {currentUser.email}</small></p> 
      <img src='{currentUser.image}' width='30px' className='float-end'/>
      <ul className="nav">
      <li className="nav-item justify-content-between">
          <NavLink className="nav-link fs-5  mx-3" style={({ isActive }) => {
                    return isActive ? activeLink : null;
                  }} to="products">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-5  mx-3" style={({ isActive }) => {
                    return isActive ? activeLink : null;
                  }} to="cart">Cart</NavLink>
        </li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default UserProfile