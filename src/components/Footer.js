import React from 'react'
import './Footer.css'
import { FaFacebookF,FaInstagramSquare,FaLinkedinIn,FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer'>
      <div className='sb__footer section__padding'>
        <div className='sb__footer-links'>
          <div className='sb__footer-links_div'>
            <h4>For Business</h4>
            <a href='/employer'><p>Employer</p></a>
            <a href='/healthplan'><p>Health plan</p></a>
            <a href='/individual'><p>Individual</p></a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>For Resources</h4>
            <a href='/employer'><p>Resource center</p></a>
            <a href='/healthplan'><p>Testimonials</p></a>
            <a href='/individual'><p>STV</p></a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Partners</h4>
            <a href='/employer'><p>Switch tech</p></a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Company</h4>
            <a href='/about'><p>About</p></a>
            <a href='/press'><p>Press</p></a>
            <a href='/career'><p>Career</p></a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Coming soon</h4>
            <div className='socialmedia'>
                <FaFacebookF/>
                <FaInstagramSquare/>
                <FaLinkedinIn/>
                <FaTwitterSquare/>
            </div>
          </div>

        </div>
        <hr/>
        <div className='sb__footer-below'>
          <div className='sb__footer-copyright'>
            <p>
              @{new Date().getFullYear()} CodeInn.All rights reserved.
            </p>
          </div>
          <div className='sb__footer-below-links'>
            
            <a href='/terms'><p>Terms and Conditions</p></a>
            <a href='/terms'><p>Privacy</p></a>
            <a href='/cookies'><p>Security</p></a>
          </div>
        </div>

      </div>
    </div>
    
  )
}

export default Footer

//  <div className='main-footer'>
//       <div className='container'>
//         <div className='row'>
//           <div className='col-md-3 col-sm-6'>
//             <h4>Hyderabad</h4>
//             <ul className='list-unstyled'>
//               <li>#####</li>
//               <li>#####</li>
//             </ul>
//           </div>

//           <div className='col-md-3 col-sm-6'>
//             <h4>Hyderabad</h4>
//             <ul className='list-unstyled'>
//               <li>#####</li>
//               <li>#####</li>
//             </ul>
//           </div>

//           <div className='col-md-3 col-sm-6'>
//             <h4>Hyderabad</h4>
//             <ul className='list-unstyled'>
//               <li>#####</li>
//               <li>#####</li>
//             </ul>
//           </div>

//           <div className='col-md-3 col-sm-6'>
//             <h4>Hyderabad</h4>
//             <ul className='list-unstyled'>
//               <li>#####</li>
//               <li>#####</li>
//             </ul>
//           </div>

//         </div>
//         <hr/>
//         <div className='row text-center'>
//           <p className='col-sm'>&copy;{new Date().getFullYear()} | All rights Reserved | Terms abd services</p>
//         </div>
//       </div>
//     </div> 

//  .main-footer{
//     color:white;
//     background-color: black;
//     padding-top:3em ;
//     position: relative;
//     bottom: 0;
//     width: 100%;
//     margin-top: auto;
// } 