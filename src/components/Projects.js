import { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectTabPane } from "./ProjectTabPane";
import { projectTypes, projectsData } from "../constants/ProjectsConst";

export const Projects = () => {
  const getFilteredProjects = (type) =>
    projectsData.filter((project) => project.type === type);

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
            defaultActiveKey={projectTypes.SIDE_PROJECT}
          >
            <div className="nav-pills-div">
              <div className="nav-pills-container">
                <Nav className="nav-pills">
                  <Nav.Item>
                    <Nav.Link eventKey={projectTypes.SIDE_PROJECT}>
                      Side Hustle
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey={projectTypes.ACADEMIC_PROJECT}>
                      Academic Projects
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey={projectTypes.COMPANY_PROJECT}>
                      Company Projects
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <span className="animate"></span>
              </div>
            </div>
            <Tab.Content>
              <ProjectTabPane
                projects={getFilteredProjects(projectTypes.SIDE_PROJECT)}
                eventKey={projectTypes.SIDE_PROJECT}
              />
              <ProjectTabPane
                projects={getFilteredProjects(projectTypes.ACADEMIC_PROJECT)}
                eventKey={projectTypes.ACADEMIC_PROJECT}
              />
              <ProjectTabPane
                projects={getFilteredProjects(projectTypes.COMPANY_PROJECT)}
                eventKey={projectTypes.COMPANY_PROJECT}
              />
              <span className="animate"></span>
            </Tab.Content>
          </Tab.Container>
        </Row>
      </Container>
    </section>
  );
};
