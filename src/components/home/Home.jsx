import React from 'react'
import "./home.css"
import Hero from '../hero/Hero'
import Info from '../info/Info'
const Home = () => {
  return (
    <div className='homeContainer'>
<Hero />
<Info />
    </div>
  )
}

export default Home