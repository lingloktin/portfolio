import { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { TextField } from "@mui/material";

export const Contact = () => {
  const OutlinedTextField = ({ label, row = 1 }) => (
    <TextField
      className="contact-text-field"
      label={label}
      variant="outlined"
      InputProps={{
        sx: { fontSize: "1.6rem" },
      }}
      InputLabelProps={{
        sx: { fontSize: "1.6rem" },
      }}
      multiline
          rows={row}
    />
  );

  return (
    <section className="contact" id="contact">
      <Container>
        <Row>
          <Col>
            <h2 className="section-header" id="skills">
              Contact <span>Me!</span>
            </h2>
          </Col>
          <Col>
            <h2 className="section-header" id="skills">
              ... or leave me a <span>message!</span>
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="section-header" id="skills">
              aslk;jdfj sad;fas jf
            </h2>
          </Col>
          <Col className="contact-form">
            <Row className="contact-form-row">
              <OutlinedTextField label="Full Name" />
              <OutlinedTextField label="Email Address" />
            </Row>
            <Row className="contact-form-row">
              <OutlinedTextField label="Your Message" row={6} />
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
