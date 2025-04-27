import React from 'react'
import '../style/header.css'

function Header() {
  return (
    <section className='header'>
      <nav className='navbar'>
        <div className='logo'>
          <img src="logo.png" alt="loading..."  className='logoimg'/>

        </div>
        <ul className='navlist'>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Location</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          
        </ul>
        <button>Login</button>
      </nav>
    </section>
  )
}

export default Header
