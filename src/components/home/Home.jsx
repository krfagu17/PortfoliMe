import React from 'react'
import "./home.css"
import Hero from '../hero/Hero'
import Info from '../info/Info'
import Lottie from 'react-lottie';
import signing from '../../assets/singing-contract.json'
const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: signing,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className='homeContainer'>
<Hero />
<Info />
<div className="lottie">

<Lottie height="150px"
width="150px"
options={defaultOptions} />
</div>
    </div>
  )
}

export default Home