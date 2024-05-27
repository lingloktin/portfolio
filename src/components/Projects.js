import { useState, useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { projectTypes, projectsData } from "../constants/ProjectsConst";

export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <Container>
        <div className="section-header-div">
          <h2 className="section-header">
            My <span>Projects</span>
            <span className="animate"></span>
          </h2>
        </div>
        <Row className="section-content">
          <Tab.Container
            id="projects-tabs"
            defaultActiveKey={`${projectTypes.SIDE_PROJECT}`}
          >
            <div className="nav-pills-div">
              <Nav className="nav-pills">
                <Nav.Item>
                  <Nav.Link eventKey={`${projectTypes.SIDE_PROJECT}`}>
                    Side Hustle
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey={`${projectTypes.ACADEMIC_PROJECT}`}>
                    Academic Projects
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey={`${projectTypes.COMPANY_PROJECT}`}>
                    Company Projects
                  </Nav.Link>
                </Nav.Item>
                <span className="animate"></span>
              </Nav>
            </div>
            <Tab.Content>
              <Tab.Pane eventKey={`${projectTypes.SIDE_PROJECT}`}>
                <Row>
                  {projectsData
                    .filter(
                      (project) => project.type === projectTypes.SIDE_PROJECT
                    )
                    .map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey={`${projectTypes.ACADEMIC_PROJECT}`}>
                <Row>
                  {projectsData
                    .filter(
                      (project) =>
                        project.type === projectTypes.ACADEMIC_PROJECT
                    )
                    .map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey={`${projectTypes.COMPANY_PROJECT}`}>
                <Row>
                  {projectsData
                    .filter(
                      (project) => project.type === projectTypes.COMPANY_PROJECT
                    )
                    .map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                </Row>
              </Tab.Pane>
              <span className="animate"></span>
            </Tab.Content>
          </Tab.Container>
        </Row>
      </Container>
    </section>
  );
};
