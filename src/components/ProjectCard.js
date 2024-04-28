import React, { useState } from 'react';
import { Col, Row } from "react-bootstrap";
import "boxicons/css/boxicons.min.css";


export const ProjectCard = ({ title, description, imgUrl }) => {

  const [isCoverVisible, setIsCoverVisible] = useState(false);

  const toggleCover = () => {
    setIsCoverVisible(!isCoverVisible);
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-card" onClick={toggleCover}>
        <div className="proj-imgbx" >
          <img src={imgUrl} />
        </div>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        {isCoverVisible && (
          <div className="proj-card-cover" >
            {/* <button className="close-btn" onClick={toggleCover}></button> */}
            <div className="proj-tech" >
              <p>Using: {description}</p>
            </div>
            <div className="proj-link">
            <a href="#">
                <i class="bx bxl-github"></i>
              </a>
            </div>
          </div>
        )}
      </div>
    </Col>
  )
}
