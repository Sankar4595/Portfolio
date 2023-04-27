import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Nav_Bar = () => {

  return <>
    <Navbar fixed="top">
      <Container>
        <Navbar.Brand style={{color:"white",fontSize:'1.5rem'}} href="/">Sankaranarayanan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{color:"white",fontSize:'1.5rem'}} href="/">Home</Nav.Link>
            <Nav.Link style={{color:"white",fontSize:'1.5rem'}} href="/about">About</Nav.Link>
            <Nav.Link style={{color:"white",fontSize:'1.5rem'}} href="/project">Project</Nav.Link>
            <Nav.Link style={{color:"white",fontSize:'1.5rem'}} href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
}

export default Nav_Bar;
