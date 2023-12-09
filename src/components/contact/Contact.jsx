import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

 const Contact = () => {
  const form = useRef();
  const serviceID =import.meta.env.VITE_REACT_APP_SERVICE_ID;
  const templateID =import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
  const userID =import.meta.env.VITE_REACT_APP_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm(serviceID, templateID, form.current, userID)
      .then((result) => {
          console.log(result.text);
          form.current.reset();
        


      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contactContainer">

    <form className='formContainer' ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_mail" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
      
    </form>
    </div>
  );
};

export default Contact