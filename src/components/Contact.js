import { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { TextField, OutlinedInput } from '@mui/material';

export const Contact = () => {
    return (
        <section className="contact" id="contact">
            <Container>
                <Col>
                    <h2 className="section-header" id="skills">
                        Contact <span>Me!</span>
                    </h2>
                    <div>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    <OutlinedInput/>
                    </div>
                </Col>
                <Col>
                    <h2 className="section-header" id="skills">
                        Contact <span>Me!</span>
                    </h2>
                </Col>
            </Container>
        </section>
    )
}