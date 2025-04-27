import React from 'react'
import '../style/hero.css'
function Hero() {
  return (
    <section className='body'>
      <div className='content'>
        <h1 className='content-h1'>YOUR FEET DESERVE THE BEST</h1>
        <p className='content-p1'>YOUR FEET DESERVE THE BEST AND WE'AR HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className='content-button'>
          <button className='btn1'>Shop Now</button>
          <button className='btn2'>Category</button>
        </div>
        <div className='otherSites'>
          <p>Also Avaliable on</p>
          <span>Flipkart</span>
          <span>Amazone</span>
        </div>
      </div>
      <div className='image'>
        <img src="shoes.png" alt="loading..." />
      </div>
    </section >
  )
}

export default Hero;
