import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

export const SkillsCard = ({ text, shortName, iconUrl, area, type }) => {
  return (
    <Col className="skills-item">
      <img className="skills-icon" src={iconUrl} alt={text} />
      <div className="skills-label">{text}</div>
    </Col>
  );
};
