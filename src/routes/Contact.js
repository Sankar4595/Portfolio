import React, { useRef } from 'react';
import './index.css';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';



const Contact = () => {
    const history = useNavigate();
    
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm("service_h5axfg6", "template_kzgj9ne", form.current, "XNPszLDPG-hamkmxx")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        history('/');
    };
    return <>
    <div className='contact-body'>
      <h1>Contact</h1>
      <form className='contact' ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input className='btn' type="submit" value="Send" />
      </form>
    </div>
  </>
}

export default Contact;
