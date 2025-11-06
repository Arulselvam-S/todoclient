import React from 'react'
import logo from './assets/logo.webp'
import {Link} from 'react-router-dom'
import'./css/HeaderFooter.css'
const Header = () => {
  return (
    <div className="header">
      <div>
            <Link to='/img'><img src={logo} alt=""
            className="logo"/></Link>
        </div>
        <div>
            <ul className="navigation-iteam">
              <Link to='/'><li>Home</li></Link>
              <Link to='/about'><li>About</li></Link>
              <Link to='/contect'><li>Contect</li></Link>
            </ul>
        </div>
        
  </div>
  )
}

export default Header