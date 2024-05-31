import { Container, Row } from "react-bootstrap";
import { TechArea } from "../constants/TechConst";
import { SkillsContainer } from "./SkillsContainer";

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
        <div className="skills-content-container">
          <Row className="skills-row">
          {skillsAreaMap.slice(0, 2).map((skill, index) => (
              <SkillsContainer
                key={index}
                title={skill.title}
                techArea={skill.area}
                animationSeq={index + 2}
              />
            ))}
          </Row>
          <Row className="skills-row">
          {skillsAreaMap.slice(2, 4).map((skill, index) => (
              <SkillsContainer
                key={index}
                title={skill.title}
                techArea={skill.area}
                animationSeq={index + 4}
              />
            ))}
          </Row>
          <Row className="skills-row">
          {skillsAreaMap.slice(4).map((skill, index) => (
              <SkillsContainer
                key={index}
                title={skill.title}
                techArea={skill.area}
                animationSeq={index + 6}
              />
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};
