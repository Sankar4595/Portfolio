import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Nav_Bar = () => {
  const history = useNavigate();
  return <>
    <Navbar fixed="top">
      <Container>
        <Navbar.Brand style={{color:"white",fontSize:'1.5rem'}} href="/">Sankaranarayanan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{color:"white",fontSize:'1.5rem'}} onClick={()=>history('/')}>Home</Nav.Link>
            <Nav.Link style={{color:"white",fontSize:'1.5rem'}} onClick={()=>history('/about')}>About</Nav.Link>
            <Nav.Link style={{color:"white",fontSize:'1.5rem'}} onClick={()=>history('/project')}>Project</Nav.Link>
            <Nav.Link style={{color:"white",fontSize:'1.5rem'}} onClick={()=>history('/contact')}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
}

export default Nav_Bar;
