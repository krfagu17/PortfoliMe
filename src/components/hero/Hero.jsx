import React from 'react'
import './hero.css'
import { MdOutlineMailOutline } from "react-icons/md";


const Hero = () => {
  return (
    <div className='heroContainer'>
      <div className="main">
      <div className="webDevLogo">
        <div className='hello'>Hello</div>
        <div className='hero-salogan'>I'm a web and Android</div>
        <div className='hero-salogan'>Developer</div>
      </div>

      <div className="buildThings">I build things for web</div>
      <div className="social-icons">
        <div className="icon-container">
          <img src="./github.svg" />
        </div>

        <div className="icon-container">
          <img src="./instagram.png" />
        </div>

        <div className="icon-container">
          <img src="./linkdin.svg" />
        </div>
      </div>
      </div>
      <div className="photo"><img src="./sam4.png" /></div>
    </div>
  )
}

export default Hero