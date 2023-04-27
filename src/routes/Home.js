import React from 'react';
import styled from 'styled-components';
import Nav_Bar from '../components/Navbar';
import { TypeAnimation } from 'react-type-animation';
import About from './About';
import Project from './Project';
import Contact from './Contact';

const Container = styled.div`
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: none;
    color: white;
    & ::-webkit-scrollbar{
        display: none;
    }
`
const Section = styled.div`
    height : 100vh;
    scroll-snap-type: none;
    display:flex;
    flex-direction:column;
    justify-content:center;

  `
const Home = () => {
  return <>
    <Nav_Bar/>
    <Container>
    <Section>
      <h1>Hi there</h1><br/>
      <h1>I'm Sankaranarayanan</h1>
      <TypeAnimation
        sequence={[`I'm a`, 500, 'Full Stack Developer', 500, 'MERN', 500]}
        style={{ fontSize: '2em' }}
        repeat={Infinity}
      />
      <div className='btn-grp'>
        <a className='btn' target='_blank' href='https://drive.google.com/file/d/125OCWfiOrMWvQxDEpYYMIinyydD7aU2x/view?usp=sharing'>Resume</a>
        <a className='btn btn-light' target='_blank' href='https://www.linkedin.com/in/sankaranarayanan-saminathan-675359a0/'>LinkedIn</a>
        <a className='btn' target='_blank' href='https://github.com/Sankar4595'>Github</a>
      </div>
    </Section>
      <About/>
      <Project/>
      <Contact/>
    </Container>
  </>
}

export default Home;
