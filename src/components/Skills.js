import { Container, Row, Col } from "react-bootstrap";
import { TechArea, TechConst } from "../constants/TechConst";
import { SkillsCard } from "./SkillsCard"

export const Skills = () => {
  const skillsAreaMap = [
    {
      title: "Programming Language",
      area: TechArea.LANGUAGE
    },
    {
      title: "Mobile App Development",
      area: TechArea.MOBILE_APP
    },
    {
      title: "Frontend Development",
      area: TechArea.FRONTEND
    },
    {
      title: "Backend Development",
      area: TechArea.BACKEND
    },
    {
      title: "Smart Contract Development",
      area: TechArea.SMART_CONTRACT
    },
    {
      title: "Database Management",
      area: TechArea.DATABASE
    },
  ]

  return (
    <section className="skills">
      <Container>
        <h2 className="section-header" id="skills">
          My <span>Skills</span>
        </h2>
      </Container>
      <Container>
        <Row className="skills-row">
          {skillsAreaMap.slice(0, 2).map((skill, index) => (
            <Col className="skills-box" key={index}>
              <Row className="skills-title">
                <p>{skill.title}</p>
              </Row>
              <Row className="skills-content">
                {Object.values(TechConst)
                .filter(tech => tech.area === skill.area)
                .map((tech, index) => <SkillsCard key={index} {...tech} />)}
              </Row>
            </Col>
          ))}
        </Row>
        <Row className="skills-row">
          {skillsAreaMap.slice(2, 4).map((skill, index) => (
            <Col className="skills-box" key={index}>
              <Row className="skills-title">
                <p>{skill.title}</p>
              </Row>
              <Row className="skills-content">
                {Object.values(TechConst)
                .filter(tech => tech.area === skill.area)
                .map((tech, index) => <SkillsCard key={index} {...tech} />)}
              </Row>
            </Col>
          ))}
        </Row>
        <Row className="skills-row">
          {skillsAreaMap.slice(4).map((skill, index) => (
            <Col className="skills-box" key={index}>
              <Row className="skills-title">
                <p>{skill.title}</p>
              </Row>
              <Row className="skills-content">
                {Object.values(TechConst)
                .filter(tech => tech.area === skill.area)
                .map((tech, index) => <SkillsCard key={index} {...tech} />)}
              </Row>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
