import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import wavingHand from '../../assets/lottie/ContactPage.json';
import sent from '../../assets/lottie/success.json';
 const Contact = () => {
  const form = useRef();
  const serviceID =import.meta.env.VITE_REACT_APP_SERVICE_ID;
  const templateID =import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
  const userID =import.meta.env.VITE_REACT_APP_PUBLIC_KEY;


  const [successMessage, setSuccessMessage] = useState("none")
  const [Play, setPlay] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm(serviceID, templateID, form.current, userID)
      .then((result) => {
          console.log(result.text);
          setSuccessMessage("block")
          setPlay(true)
          form.current.reset();
          setInterval(() => {
            setSuccessMessage("none")
          }, 3000);
        


      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contactContainer">

<Player
  autoplay
  loop={true}
  speed={0.5}
  src={wavingHand}
  style={{ height: '200px', width: '400px' }}
>
  </Player>

    <form className='formContainer' ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_mail" />
      <label>Message</label>
      <textarea name="message" />
      <div className="successMessage" style={{display:successMessage}}>
        <h3 style={{color:'white'}}>Message Sent</h3>
</div>
      <input type="submit" value="Send" />
      
      
    </form>
    </div>
  );
};

export default Contact