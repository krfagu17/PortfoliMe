import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

 const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    form.current.reset();

    emailjs.sendForm('service_o6e148t', 'template_gfpp6x8', form.current, 'ghqnGImBHyq4OEqOd')
      .then((result) => {
          console.log(result.text);
        


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