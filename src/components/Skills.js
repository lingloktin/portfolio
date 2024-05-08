import { Container, Row, Col } from "react-bootstrap";
import { TechArea, TechConst } from "../constants/TechConst";
import { SkillsCard } from "./SkillsCard"

export const Skills = () => {

  return (
    <section className="skills">
      <Container>
        <h2 className="section-header" id="skills">
          My <span>Skills</span>
        </h2>
      </Container>
      <Container>
        <Row className="skills-row">
          <Col className="skills-card">
            <div className="skills-title">
              <p>Frontend Development</p>
            </div>
            <div className="skills-content">
              {Object.values(TechConst)
                .filter(tech => tech.area === TechArea.FRONTEND)
                .map((tech, index) => { return <SkillsCard key={index} {...tech} /> })}
            </div>
          </Col>
          <Col className="skills-card">
            <div className="skills-title">
              <p>Smart Contract Development</p>
            </div>
            <div className="skills-content">
              {Object.values(TechConst)
                .filter(tech => tech.area === TechArea.SMART_CONTRACT)
                .map((tech, index) => { return <SkillsCard key={index} {...tech} /> })}
            </div>
          </Col>

        </Row>
        <Row className="skills-row">
          <Col className="skills-card">
            <div className="skills-title">
              <p>Database Management</p>
            </div>
            <div className="skills-content">
              {Object.values(TechConst)
                .filter(tech => tech.area === TechArea.DATABASE)
                .map((tech, index) => { return <SkillsCard key={index} {...tech} /> })}
            </div>
          </Col>
          <Col className="skills-card">
            <div className="skills-title">
              <p>Backend</p>
            </div>
            <div className="skills-content">
              {Object.values(TechConst)
                .filter(tech => tech.area === TechArea.BACKEND)
                .map((tech, index) => { return <SkillsCard key={index} {...tech} /> })}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
