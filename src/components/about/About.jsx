import React from 'react';
import './about.css';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import wavingHand from '../../../public/lottie/About-Animation.json';

const About = () => {
  return (
    <div className='about-container'>
     <div className="content">
        <h1 className="about">About Me</h1> <br />
        <Player
  autoplay
  loop={false}
  speed={0.5}
  src={wavingHand}
  style={{ height: '400px', width: '400px' }}
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
  )
}

export default About