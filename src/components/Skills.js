import { Container, Row, Col } from "react-bootstrap";
import { TechArea, TechConst } from "../constants/TechConst";
import { SkillsCard } from "./SkillsCard";

export const Skills = () => {
  const skillsAreaMap = [
    {
      title: "Programming Language",
      area: TechArea.LANGUAGE,
    },
    {
      title: "Mobile App Development",
      area: TechArea.MOBILE_APP,
    },
    {
      title: "Frontend Development",
      area: TechArea.FRONTEND,
    },
    {
      title: "Backend Development",
      area: TechArea.BACKEND,
    },
    {
      title: "Smart Contract Development",
      area: TechArea.SMART_CONTRACT,
    },
    {
      title: "Database Management",
      area: TechArea.DATABASE,
    },
  ];

  return (
    <section className="skills" id="skills">
      <Container>
        <div className="section-header-div">
          <h2 className="section-header">
            My <span>Skills</span>
            <span className="animate"></span>
          </h2>
        </div>
        <Col className="skills-content-container">
          <Row className="skills-row">
            {skillsAreaMap.slice(0, 2).map((skill, index) => (
              <Col
                className="skills-box"
                key={index}
                size={12}
                md={12}
                lg={6}
                style={{ "--animation-seq": index + 2 }}
              >
                <div className="skills-title">
                  <p>{skill.title}</p>
                </div>
                <Row className="skills-content">
                  {Object.values(TechConst)
                    .filter((tech) => tech.area === skill.area)
                    .map((tech, index) => (
                      <SkillsCard key={index} {...tech} />
                    ))}
                </Row>
                <span className="animate"></span>
              </Col>
            ))}
          </Row>
          <Row className="skills-row">
            {skillsAreaMap.slice(2, 4).map((skill, index) => (
              <Col
                className="skills-box"
                key={index}
                size={12}
                md={12}
                lg={6}
                style={{ "--animation-seq": index + 4 }}
              >
                <div className="skills-title">
                  <p>{skill.title}</p>
                </div>
                <Row className="skills-content">
                  {Object.values(TechConst)
                    .filter((tech) => tech.area === skill.area)
                    .map((tech, index) => (
                      <SkillsCard key={index} {...tech} />
                    ))}
                </Row>
                <span className="animate"></span>
              </Col>
            ))}
          </Row>
          <Row className="skills-row">
            {skillsAreaMap.slice(4).map((skill, index) => (
              <Col
                className="skills-box"
                key={index}
                size={12}
                md={12}
                lg={6}
                style={{ "--animation-seq": index + 6 }}
              >
                <div className="skills-title">
                  <p>{skill.title}</p>
                </div>
                <Row className="skills-content">
                  {Object.values(TechConst)
                    .filter((tech) => tech.area === skill.area)
                    .map((tech, index) => (
                      <SkillsCard key={index} {...tech} />
                    ))}
                </Row>
                <span className="animate"></span>
              </Col>
            ))}
          </Row>
        </Col>
      </Container>
    </section>
  );
};
