import { TextField } from '@mui/material';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import Nav_Bar from '../components/Navbar';

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
    return <>
    <Nav_Bar/>
    <Section>
      <h1>Contact</h1>
      <form className='contact'>
        <input placeholder='Name'/>
        <input placeholder='Email'/>
        <textarea placeholder='Write Your Message'/>
        <button className='btn'>Send</button>
      </form>
    </Section>
  </>
}

export default Contact;
