import React from 'react';
import styled from 'styled-components';
import Nav_Bar from '../components/Navbar';

const Section = styled.div`
    height : 100vh;
    scroll-snap-type: none;
    display:flex;
    justify-content:center;
    gap:30px;
  `

const Project = () => {
  const data = [
    {
      name:"Admin Dashboard",
      img : "src/routes/images/admin.png",
      link : "https://b43-admin-dashboard.netlify.app/",
    },
    {
      name:"Library App",
      img : "library.png",
      link : "https://b43-library-management.netlify.app/",
    },
    {
      name:"Youtube Clone",
      img : "youtube.png",
      link : "https://b43-youtubeclone.netlify.app/",
    }
  ]
    return <>
    <Nav_Bar/>
    <Section>
      {data.map((item,idx)=>{
        return(
         <div className='card'>
            <p style={{color:"black"}}>{item.name}</p>
            <img style={{width:"100%"}} src={item.img}/>
            <a className='btn' href={item.link} target='_blank'>Link</a>
         </div> 
        )
      })}
    </Section>
  </>
}

export default Project;
