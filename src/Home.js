import React from 'react'
import { useState } from 'react'
import logo from './assets/logo.webp'
import arul  from './assets/arul.jpg'
import './css/Home.css'
import SplitText from "./SplitText";
const Home = () => {
  const [pic,setpic] = useState(logo)
  function changepic() {
    setpic(arul)
  }
  function back(){
    setpic(logo)
  }
  
const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
  return (
    <div className="home">
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
    <div >
      <h1 className="text"><SplitText
  text="This is ArulSelvam, A Full Stack Developer"
  className="text-2xl font-semibold text-center"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
/>
</h1>
    </div>
    </div>
  )
}

export default Home