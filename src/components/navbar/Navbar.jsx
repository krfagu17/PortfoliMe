import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
// icons
import { MdOutlineMailOutline } from "react-icons/md";
const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className="logo">Fagu Kumar</div>
      <div className="menuItems">
        <Link className='link' to={'/'}>Home</Link>
        <Link className='link' to={'Contact'}>Contact</Link>
        <Link className='link' to={'Home'}>Skills</Link>
        <Link className='link' to={'Project'}>Projects</Link>
      </div>
      <a href='/public/resume/Fagu-Kumar-google.pdf' className="hireMe"> <MdOutlineMailOutline />Hire Me</a>
    </div>
  )
}

export default Navbar