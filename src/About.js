import React from 'react'
import './css/About.css'
import arul  from './assets/arul.jpg'
import logo from './assets/logo.webp'
import { useState } from 'react'
const About = () => {
   const [pic,setpic] = useState(arul)
      function changepic1() {
        setpic(logo)
      }
      function back1(){
        setpic(arul)
      }
  
  return (
    <div className="about-section">
     
      <diV className="about-content">
      <div className="about-text">
         <h1>
            About Us
          </h1>
          <p>Welcome to our website! This site is created to provide useful and meaningful information in a simple and easy way. Our goal is to share content that helps, guides, and supports our visitors.</p>
         <h4> We believe in:</h4>
          <ul>

          <li>Clear and simple communication</li>

          <li>Providing quality and value</li>
        
           <li>Creating a positive user experience</li> </ul>

          <p>Thank you for visiting our site. We hope you find what you're looking for and enjoy your time here!</p>
    </div>
  </diV>
   <div>
         <img src={pic} alt="" onMouseEnter={changepic1} onMouseLeave={back1}class="img"/>
      </div>
  </div>
  )
}

export default About