import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import '../styles/projectCard.css';

function ProjectCard({ imgUrl, title, description }) {

  return (
    <Col size={12} sm={6} md={4} className='position-relative'>
      <div className='project-imgbx'
       >
        <img src={imgUrl} alt={title + ' image'} className=' top-0 start-0 w-100 h-100 object-fit-contain' />
      </div>
      <div className={`project-txtx`}>
        <h2>{title}</h2>
        <span>{description}</span>
      </div>
    </Col>
  );
}

export default ProjectCard;
