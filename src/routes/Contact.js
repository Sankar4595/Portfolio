import React, { useRef } from 'react';
import styled from 'styled-components';
import Nav_Bar from '../components/Navbar';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const Section = styled.div`
    height : 100vh;
    scroll-snap-type: none;
    display:flex;
    flex-direction:column;
    gap:25px;
    align-item:flex-start;
    justify-content:center;
  `

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
    <Nav_Bar/>
    <Section>
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
    </Section>
  </>
}

export default Contact;
