import React from 'react'
import { useState } from 'react'
import logo from './assets/logo.webp'
import arul  from './assets/arul.jpg'
import './css/Home.css'
const Home = () => {
  const [pic,setpic] = useState(logo)
  function changepic() {
    setpic(arul)
  }
  function back(){
    setpic(logo)
  }
  return (
    <div className="main">
      <div className="image">
            <img src={pic} alt="" onMouseEnter={changepic} onMouseLeave={back}class="img"/>

        </div>
        <div className="content">
            <h1>well,come to my web site</h1>
            <p>Thank you for visiting our website! We are happy to share useful and informative content with you. Our goal is to provide quality information and a smooth browsing experience.

Feel free to explore our pages and learn more about who we are and what we do.</p>

        </div>

    </div>
  )
}

export default Home