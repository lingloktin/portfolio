import React, { useState } from 'react';
import { Col, Row } from "react-bootstrap";
import "boxicons/css/boxicons.min.css";


export const ProjectCard = ({ title, description, imgUrl, tech, githubUrl }) => {

  const [isCoverVisible, setIsCoverVisible] = useState(false);

  const toggleCover = () => {
    setIsCoverVisible(!isCoverVisible);
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-card" onClick={isCoverVisible ? null : toggleCover}>
        <div className="proj-imgbx" >
          <img src={imgUrl} />
        </div>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        <div className={`proj-card-cover ${isCoverVisible ? 'visible' : ''}`} >
          <button className="close-btn" onClick={toggleCover}><i class='bx bx-x-circle'></i></button>
          <div className="proj-tech" >
            <p><span>Using: </span>{tech.join(", ")}</p>
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
