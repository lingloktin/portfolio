import { Tab, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

export const ProjectTabPane = ({ projects, eventKey }) => {
  return (
    <Tab.Pane eventKey={eventKey}>
      <Row>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Row>
    </Tab.Pane>
  );
};
