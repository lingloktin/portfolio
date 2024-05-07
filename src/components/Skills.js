import { Container, Row, Col } from "react-bootstrap";
import { TechType, TechConst } from "../constants/TechConst";

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
                .filter(tech => tech.type === TechType.FRONTEND)
                .map(tech => tech.text + ' ')}
            </div>


          </Col>
          <Col className="skills-card">

          </Col>
        </Row>
      </Container>
    </section>
  );
};
