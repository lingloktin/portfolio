import React, { useState, useEffect } from 'react';
import { Col, Row } from "react-bootstrap";


export const SkillsCard = ({ text, shortName, iconUrl, area, type }) => {
  return (
    <Col className="skills-item">
      <Row className="skills-icon">
      <img src={iconUrl} alt={text}/>

      </Row>
      <p className='skills-label'>{text}</p>
    </Col>

  );
};
