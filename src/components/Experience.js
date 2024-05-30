import { Container, Row, Col } from "react-bootstrap";
import { experienceData, educationData } from "../constants/ExperienceConst";
import { ExperienceCard } from "./ExperienceCard";

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <div className="section-header-div">
          <h2 className="section-header">
            My <span>Journey</span>
            <span className="animate"></span>
          </h2>
        </div>
        <Row>
          <Col sm={12} md={6}>
            <div className="experience-col experience-col-1">
              <div className="title-div">
                <h3 className="title">
                  Education<span className="animate"></span>
                </h3>
              </div>
              <ExperienceCard data={educationData} isEducation={true} />
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className="experience-col experience-col-2">
              <div className="title-div">
                <h3 className="title">
                  Experience<span className="animate"></span>
                </h3>
              </div>
              <ExperienceCard data={experienceData} isEducation={false} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
