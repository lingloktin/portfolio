import { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { TextField } from '@mui/material';

export const Contact = () => {
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
                            Contact <span>Me!</span>
                        </h2>
                    </Col>
                    <Col className="contact-form">
                        
                        <TextField className="contact-text-field" 
                        label="Full Name" 
                        variant="outlined" 
                        inputProps={{ className: 'contact-text-field-box' }} 
                        />
                    </Col>

                </Row>
            </Container>
        </section>
    )
}