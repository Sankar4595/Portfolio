import React from 'react';
import './index.css';
import admin from '../routes/images/admin.png';
import library from '../routes/images/library.png';
import youtube from '../routes/images/youtube.png';
import { TypeAnimation } from 'react-type-animation';


const Project = () => {
  const data = [
    {
      name:"Admin Dashboard",
      img : admin,
      link : "https://b43-admin-dashboard.netlify.app/",
    },
    {
      name:"Library App",
      img : library,
      link : "https://b43-library-management.netlify.app/",
    },
    {
      name:"Youtube Clone",
      img : youtube,
      link : "https://b43-youtubeclone.netlify.app/",
    }
  ]
    return <>
    <div className='project'>
      <h1>Projects</h1>
      <div className='card-body'>
      {data.map((item,idx)=>{
        return(
         <div className='card' key={idx}>
            <TypeAnimation
              sequence={[`${item.name}`, 500,'',200]}
              style={{ fontSize: '2em' }}
              repeat={Infinity}
            />
            <img style={{width:"100%",height:"180px"}} src={item.img}/>
            <a className='btn' href={item.link} target='_blank'>Link</a>
         </div> 
        )
      })}
      </div>
      
    </div>
  </>
}

export default Project;
