import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';


const Nav_Bar = () => {
  const history = useNavigate();
  const [click,setClick] = useState(false);
  const handleClick = ()=> setClick(!click);
  return <>
    <Navbar fixed="top">
      <Container>
      <div className='hamburger' onClick={handleClick}>
        {click ? <FaTimes size={20} style={{color:"#fff"}}/>
        : <FaBars size={20} style={{color:"#fff"}}/>}
      </div>
        <Navbar.Brand style={{color:"white",fontSize:'1.5rem'}} href="/">Sankaranarayanan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={click ? 'nav-menu active' : 'nav-menu'}>
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
