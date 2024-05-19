import React, { useState } from 'react';
import { Col, Row } from "react-bootstrap";


export const ProjectCard = ({ title, description, imgUrl, tech, githubUrl }) => {

  const [isCoverVisible, setIsCoverVisible] = useState(false);

  const toggleCover = () => {
    setIsCoverVisible(!isCoverVisible);
  };

  return (
    <Col size={12} sm={12} md={4}>
      <div className='proj-card'>
        <div className={`proj-imgbx ${isCoverVisible ? '' : 'clickable'}`} onClick={isCoverVisible ? null : toggleCover}>
          <img src={imgUrl} alt="project"/>
        </div>
        <div className="proj-txtx">
          <h4 className={`${isCoverVisible ? '' : 'clickable'}`} onClick={isCoverVisible ? null : toggleCover}>{title}</h4>
          <span>{description}</span>
        </div>
        <div className={`proj-card-cover ${isCoverVisible ? 'visible' : ''}`} >
          <button className="close-btn" onClick={toggleCover}><i class='bx bx-x-circle'></i></button>
          <div className="proj-tech" >
            <h4>{title}</h4>
            {Object.entries(tech).map(([key, values], index) => (
              <p key={index}><span>{key}: </span>{values.join(", ")}</p>
            ))}
          </div>
          <div className="proj-link">
            <a href={githubUrl}>
              <i class="bx bxl-github"></i>
            </a>
          </div>
        </div>
      </div>
    </Col>
  )
}
