import { Container, Row, Col } from "react-bootstrap";

export const Skills = () => {
  const techTools = {
    JAVASCRIPT: {
      text: "JavaScript",
      iconUrl: "bx bxl-javascript",
      type: 1,
    },
    MONGODB: {
      text: "MongoDB",
      iconUrl: "bx bxl-mongodb",
      type: 6,
    },
  };

  return (
    <section className="skills">
      <Container>
        <h2 className="section-header" id="skills">
          My <span>Skills</span>
        </h2>
      </Container>
      <Container>
        <Row className="skills-row">
          <Col className="frontend-box">

          </Col>
          <Col className="frontend-box">

          </Col>
        </Row>
      </Container>
    </section>
  );
};
