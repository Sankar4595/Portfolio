import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Project from './routes/Project';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';


function App() {
  return <>
    {/* <Container>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
    </Container> */}
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/project' element={<Project/>}/>
    </Routes>
  </>
}

export default App;
