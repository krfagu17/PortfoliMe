import React from 'react'
import "./home.css"
import Hero from '../hero/Hero'
import Info from '../info/Info'
import sign from "../../assets/sign.gif"
import About from '../about/About'
import MySkill from '../myskill/MySkill'
import Projects from '../projects/Projects'
import Contact from '../contact/Contact'
const Home = () => {
  

  return (
    <div className='homeContainer'>
<Hero />
<Info />
<div className="lottie">
<img  src={sign} />
</div>

<About />
<div style={{width:"auto",background:'#291C3A', height:'20px'}}></div>
<MySkill />
<div style={{width:"auto",background:'#291C3A', height:'20px'}}></div>
<Projects />
<div style={{width:"auto",background:'#291C3A', height:'20px'}}></div>
<Contact />
    </div>

  )
}

export default Home