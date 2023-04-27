import React from 'react';
import styled from 'styled-components';
import Nav_Bar from '../components/Navbar';

const Section = styled.div`
    height : 100vh;
    scroll-snap-type: none;
    display:flex;
    flex-direction:column;
    justify-content:center;
  `

const About = () => {
    return <>
    <Nav_Bar/>
    <Section>
      <h1>About Me</h1>
      <p>Hi, I'm a Well-qualified Full Stack Developer familiar with a wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements with database management. Handles any part of the process with ease. Collaborative team player with a willingness to learn in and grow with the organization.</p>
    </Section>
  </>
}

export default About;
