import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { FaArtstation } from "react-icons/fa";
import { loginContext } from '../contexts/loginContext';


function Navbar() {
  const activeLink = {
    color: "#00FFFF",
    fontWeight: "bold",
    fontSize: "1.2rem",
  };
  let [currentUser,loginErr,userLoginStatus,loginUser,logoutUser]=useContext(loginContext)
  
  return (
    
    <nav className="cus navbar navbar-expand-sm  fw-bold">
  <div className="container-fluid">
       <FaArtstation/>
    <NavLink className="navbar-brand fs-4" style={({ isActive }) => {
                    return isActive ? activeLink : null;
                  }} to="/">Financial-Edu</NavLink>
    <button className="navbar-toggler" type="button"
     data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse  mx-3" id="navbarNav">
      <ul className="navbar-nav ms-auto mr-3 ">
        <li className="nav-item">
          <NavLink className="nav-link fs-5  mx-3" style={({ isActive }) => {
                    return isActive ? activeLink : null;
                  }}  to="/Register">Register</NavLink>
        </li>
        {userLoginStatus?<li className="nav-item">
          <NavLink className="nav-link fs-5  mx-3" style={({ isActive }) => {
                    return isActive ? activeLink : null;
                  }} to="/Login" onClick={logoutUser}>Logout</NavLink>
        </li>:
        <li className="nav-item">
        <NavLink className="nav-link fs-5  mx-3" style={({ isActive }) => {
                  return isActive ? activeLink : null;
                }} to="/Login">Login</NavLink>
      </li>}
        
        
        <li className="nav-item">
          <NavLink className="nav-link fs-5  mx-3" style={({ isActive }) => {
                    return isActive ? activeLink : null;
                  }} to="/Aboutus">Abouts</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>




  )
}

export default Navbar



// <ul classNameName="nav justify-content-center">

// <li classNameName="nav-item">
//   <Link className="nav-link "  to="/">Home</Link>
//   </li>
//   <li className="nav-item">
//   <Link className="nav-link"  to="/Register">Register</Link>
//   </li>
//   <li className="nav-item">
//   <Link className="nav-link"  to="/Login">Login</Link>
//   </li>
//   <li className="nav-item">
//   <Link className="nav-link"  to="/Aboutus">Abouts</Link>
// </li>
// </ul>
