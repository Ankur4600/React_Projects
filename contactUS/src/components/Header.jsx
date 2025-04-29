import React from 'react'
import '../styles/Header.css'
function Header() {
  return (
    <section className='header'>
      <div className='logo'>
        <img src="images/pngegg.png" alt="logo.." />
      </div>
      <nav className='navBar'>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    </section>
  )
}

export default Header
