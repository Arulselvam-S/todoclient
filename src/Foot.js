import React from 'react'
import logo from './assets/logo.webp'
import'./css/HeaderFooter.css'
const Foot = () => {
  return (
    <div className="footer">
        <div>
        <h4>© 2025 Todo Application. All rights reserved.</h4>
        </div>
        <div>
        <img src={logo} alt=""className="logo" />
        </div>
        <div className="add">
       <div>
            <h4>Address:</h4>
        <p>123 Main Street, Anytown, USA</p>
        
        </div> 
        <div>
            <h4>Contact:</h4>
        <p>Email:senthilkumar</p>
        <p>Phone:+91 9876543210</p>
            
        </div>
        
        </div>
    </div>
  )
}

export default Foot