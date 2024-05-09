import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { experienceData, educationData } from "../constants/ExperienceConst";

export const Experience = () => {
  return (
    <section className="experience">
      <Container>
        <h2 className="section-header" id="experience">
          My <span>Journey</span>
        </h2>
      </Container>
      <Container>
        <Row>
          <Col size={12} sm={12} md={6}>
            <Container>
              <Row className="aligh-items-center experience-row">
                <Col>
                  <h3 className="title">Education</h3>
                  <div className="experience-box">
                    {educationData.map((education, index) => (
                      <div className="experience-content" key={index}>
                        <div className="content">
                          <div className="year">
                            <i className="bx bxs-calendar"></i> {education.year}
                          </div>
                          <Row>
                            <Col>
                              <div
                                className={`${education.shortName}-icon`}
                              ></div>
                            </Col>
                            <Col className={`${education.shortName}-title`}>
                              <h3>{education.title}</h3>
                              <h4>{education.subtitle}</h4>
                            </Col>
                          </Row>
                          <Row>
                            <p>{education.description}</p>
                          </Row>
                        </div>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col size={12} sm={12} md={6}>
            <Container>
              <Row className="aligh-items-center experience-row">
                <Col>
                  <h3 className="title">Experience</h3>
                  <div className="experience-box">
                    {experienceData.map((experience, index) => (
                      <div className="experience-content" key={index}>
                        <div className="content">
                          <div className="year">
                            <i className="bx bxs-calendar"></i>{" "}
                            {experience.year}
                          </div>
                          <Row>
                            <Col>
                              <div
                                className={`${experience.shortName}-icon`}
                              ></div>
                            </Col>
                            <Col className={`${experience.shortName}-title`}>
                              <h3>{experience.title}</h3>
                              <h4>{experience.subtitle}</h4>
                            </Col>
                          </Row>
                          <Row>
                            <ul>
                              {experience.description.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          </Row>
                        </div>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
