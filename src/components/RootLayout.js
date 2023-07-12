import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'


function RootLayout() {
  return (
    <div>
      <div className="content-container"><Navbar/></div>
        <div className="container">
          
        <Outlet/>
  
        </div>
        <div className="footer-container"><Footer/> </div>
        
    </div>
  )
}

export default RootLayout