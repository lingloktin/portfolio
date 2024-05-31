import React from "react";
import { TechConst } from "../constants/TechConst";

import { Col, Row } from "react-bootstrap";

const SkillsCard = ({ text, shortName, iconUrl, area, type }) => {
  return (
    <Col className="skills-item">
      <img className="skills-icon" src={iconUrl} alt={text} />
      <div className="skills-label">{text}</div>
    </Col>
  );
};


export const SkillsContainer = ({ title, techArea, animationSeq }) => {
  const filteredTech = Object.values(TechConst).filter(tech => tech.area === techArea);

  return (
    <Col className="skills-box" size={12} md={12} lg={6} style={{ "--animation-seq": animationSeq }}>
      <div className="skills-title">
        <p>{title}</p>
      </div>
      <Row className="skills-content">
        {filteredTech.map((tech, index) => (
          <SkillsCard key={index} {...tech} />
        ))}
      </Row>
      <span className="animate"></span>
    </Col>
  );
};
