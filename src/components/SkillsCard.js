import React, { useState, useEffect } from 'react';
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconFrom } from "../constants/TechConst";
import { faEthereum } from '@fortawesome/free-brands-svg-icons';

export const SkillsCard = ({ text, iconFrom, iconUrl, area, type }) => {

  return (
    <Col>
      <div className="skills-icon">
        {iconFrom === IconFrom.BOXICONS ? (
          <i className={iconUrl}></i>
        ) : iconFrom === IconFrom.FORTAWESOME ? (
          <div>
            <FontAwesomeIcon icon={faEthereum} />
          </div>
        ) : null}
      </div>
      <div>{text}</div>
    </Col>
  );
};
