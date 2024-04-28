import { useState, useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projectsData from "../constants/projectsData";

export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <Container>
        <h2 className="section-header">
          My <span>Projects</span>
        </h2>
      </Container>
      <Container>
        <Row>
          <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav
              className="nav-pills"
            >
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Tab 3</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content id="slideInUp">
              <Tab.Pane eventKey="first">
                <Row>
                  {projectsData.map((project, index) => {
                    return <ProjectCard key={index} {...project} />;
                  })}
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque quam, quod neque provident velit, rem explicabo
                  excepturi id illo molestiae blanditiis, eligendi dicta
                  officiis asperiores delectus quasi inventore debitis quo.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque quam, quod neque provident velit, rem explicabo
                  excepturi id illo molestiae blanditiis, eligendi dicta
                  officiis asperiores delectus quasi inventore debitis quo.
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Row>
      </Container>
    </section>
  );
};
