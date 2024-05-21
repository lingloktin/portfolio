import { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { TextField } from "@mui/material";

export const Contact = () => {
    const contactMethods = [
        {
            icon: 'bx bxl-whatsapp',
            text: '+852 56169596',
            link: 'https://wa.me/85256169596',
        },
        {
            icon: 'bx bx-envelope',
            text: 'marcus.ling.lt@gmail.com',
            link: 'mailto:marcus.ling.lt@gmail.com',
        },
        {
            icon: 'bx bxl-linkedin',
            text: 'TO-BE-CHANGED-LATER',
            link: '#',
        },
        // Add more contact methods here
    ];
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
                    <Col size={12} sm={12} md={6}>
                        <h2 className="section-header" id="skills">
                            Contact <span>Me!</span>
                        </h2>
                    </Col>
                    <Col size={12} sm={0} md={6} className="hidden-when-mobile">
                        <h2 className="section-header" id="skills">
                            ... or leave me a <span>message!</span>
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col className="social-icon contact-method-container" size={12} sm={12} md={6}>
                        {contactMethods.map((method, index) => (
                            <Row className="contact-method" key={index}>
                                <div className="contact-method-icon">
                                    <a href={method.link}>
                                        <i className={method.icon}></i>
                                    </a>
                                </div>
                                <Col className="contact-method-text">
                                    <p>{method.text}</p>
                                </Col>
                            </Row>
                        ))}
                    </Col>
                    <Col className="contact-form" size={12} sm={12} md={6}>
                        <Row className="contact-form-row">
                            <OutlinedTextField label="Name" />
                            <OutlinedTextField label="Email Address" />
                        </Row>
                        <Row className="contact-form-row">
                            <OutlinedTextField label="Your Message" row={10} />
                        </Row>
                        <Row className="contact-form-row btn-box">
                            <button className="btn" type="submit">Submit</button>
                        </Row>
                    </Col>
                </Row>
                <div className="gotop-icon">
                    <a href="#home">
                        <i className="bx bx-up-arrow-alt"></i>
                    </a>
                </div>
            </Container>
        </section>
    );
};
