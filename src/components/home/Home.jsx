import React from 'react'
import "./home.css"
import Hero from '../hero/Hero'
import Info from '../info/Info'
import sign from "../../assets/sign.gif"
const Home = () => {
  

  return (
    <div className='homeContainer'>
<Hero />
<Info />
<div className="lottie">
<img  src={sign} />
</div>
    </div>
  )
}

export default Home