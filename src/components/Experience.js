import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { experienceData, educationData } from "../constants/ExperienceConst";

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <div className="section-header-div">
          <h2 className="section-header">
            My <span>Journey</span>
            <span className="animate"></span>
          </h2>
        </div>
        <Row>
          <Col sm={12} md={6}>
            <div className="experience-col-1">
              <div className="title-div">
                <h3 className="title">
                  Education<span className="animate"></span>
                </h3>
              </div>
              <div className="experience-box">
                {educationData.map((education, index) => (
                  <div className="experience-content" key={index}>
                    <div className="content">
                      <div className="year">
                        <i className="bx bxs-calendar"></i> {education.year}
                      </div>
                      <div className="experience-content-header">
                        <div className="experience-icon">
                          <img
                            src={education.iconUrl}
                            alt={education.shortName}
                          ></img>
                        </div>
                        <div className="experience-titles-div">
                          <div className="experience-title">
                            <h3>{education.title}</h3>
                          </div>
                          <div className="experience-subtitle">
                            <h4>{education.subtitle}</h4>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p>{education.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <span className="animate"></span>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className="experience-col-2">
              <div className="title-div">
                <h3 className="title">Education<span className="animate"></span></h3>
              </div>
              <div className="experience-box">
                {experienceData.map((experience, index) => (
                  <div className="experience-content" key={index}>
                    <div className="content">
                      <div className="year">
                        <i className="bx bxs-calendar"></i> {experience.year}
                      </div>
                      <div className="experience-content-header">
                        <div className="experience-icon">
                          <img
                            src={experience.iconUrl}
                            alt={experience.shortName}
                          ></img>
                        </div>
                        <div className="experience-titles-div">
                          <div className="experience-title">
                            <h3>{experience.title}</h3>
                          </div>
                          <div className="experience-subtitle">
                            <h4>{experience.subtitle}</h4>
                          </div>
                        </div>
                      </div>
                      <div>
                        <ul>
                          {experience.description.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
                <span className="animate"></span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
