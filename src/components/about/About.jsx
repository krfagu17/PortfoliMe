import React from 'react';
import './about.css';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import wavingHand from '../../assets/lottie/wavingHand.json';

const About = () => {
  return (
    <div className='about-container'>
     <div className="content">
        <h1 className="about">About Me</h1> <br />
        <div className="contentIn">

        <Player
  autoplay
  loop
  speed={1}
  src={wavingHand}
  style={{ height: '200px', width: '200px' }}
>

</Player>
     As a web developer,I am specialize in creating 
     and maintaining websites and web applications.
      I am proficient in HTML, CSS, and JavaScript,
       and I have a strong understanding of front-end 
       frameworks like React or Angular. I am skilled 
       in designing user-friendly interfaces and optimizing
        websites for performance and responsiveness.
  </div>
     </div>
    </div>
  )
}

export default About