import { Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectTabPane } from "./ProjectTabPane";
import { ProjectTypes, ProjectsData } from "../constants/ProjectsConst";

export const Projects = () => {
  const getFilteredProjects = (type) =>
    ProjectsData.filter((project) => project.type === type);

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
            defaultActiveKey={ProjectTypes.SIDE_PROJECT}
          >
            <div className="nav-pills-div">
              <div className="nav-pills-container">
                <Nav className="nav-pills">
                  <Nav.Item>
                    <Nav.Link eventKey={ProjectTypes.SIDE_PROJECT}>
                      Side Hustle
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey={ProjectTypes.ACADEMIC_PROJECT}>
                      Academic Projects
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey={ProjectTypes.COMPANY_PROJECT}>
                      Company Projects
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <span className="animate"></span>
              </div>
            </div>
            <Tab.Content>
              <ProjectTabPane
                projects={getFilteredProjects(ProjectTypes.SIDE_PROJECT)}
                eventKey={ProjectTypes.SIDE_PROJECT}
              />
              <ProjectTabPane
                projects={getFilteredProjects(ProjectTypes.ACADEMIC_PROJECT)}
                eventKey={ProjectTypes.ACADEMIC_PROJECT}
              />
              <ProjectTabPane
                projects={getFilteredProjects(ProjectTypes.COMPANY_PROJECT)}
                eventKey={ProjectTypes.COMPANY_PROJECT}
              />
              <span className="animate"></span>
            </Tab.Content>
          </Tab.Container>
        </Row>
      </Container>
    </section>
  );
};
