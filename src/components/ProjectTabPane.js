import { Tab, Row, Col } from "react-bootstrap";
import React, { useState } from 'react';

const ProjectCard = ({ title, description, imgUrl, tech, hasGitLink, githubUrl, hasExternalLink, externalUrl }) => {
  const [isCoverVisible, setIsCoverVisible] = useState(false);

  const toggleCover = () => {
    setIsCoverVisible(!isCoverVisible);
  };

  return (
    <Col className="proj-card-container" size={12} sm={12} md={6} lg={4}>
      <div className='proj-card'>
        <div className={`proj-imgbx ${isCoverVisible ? '' : 'clickable'}`} onClick={isCoverVisible ? null : toggleCover}>
          <img src={imgUrl} alt="project" />
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
            {hasGitLink ?
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <i class="bx bxl-github"></i>
              </a>
              : ""}
            {hasExternalLink ?
              <a href={externalUrl} target="_blank" rel="noopener noreferrer">
                <i class='bx bx-link-external'></i>
              </a>
              : ""}
          </div>
        </div>
      </div>
    </Col>
  )
}


export const ProjectTabPane = ({ projects, eventKey }) => {
  return (
    <Tab.Pane eventKey={eventKey}>
      <Row>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Row>
    </Tab.Pane>
  );
};
