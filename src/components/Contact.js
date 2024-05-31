import { useState, useRef } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { TextField } from "@mui/material";
import { contactMethods } from "../constants/ContactConst";
import emailjs from "emailjs-com";
import { EmailConst } from "../constants/EmailConst";
import CircularProgress from "@mui/material/CircularProgress";

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const fromNameRef = useRef("");
  const fromEmailRef = useRef("");
  const messageRef = useRef("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      from_name: fromNameRef.current.value,
      from_email: fromEmailRef.current.value,
      message: messageRef.current.value,
    };

    emailjs
      .send(
        EmailConst.SERVICE_ID,
        EmailConst.TEMPLATE_ID,
        formData,
        EmailConst.PUBLIC_KEY
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setModalMessage("Message sent successfully!");
        setShowModal(true);
        fromNameRef.current.value = "";
        fromEmailRef.current.value = "";
        messageRef.current.value = "";
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setModalMessage("Failed to send message. Please try again later.");
        setShowModal(true);
      })
      .finally(() => setLoading(false));
  };
  const OutlinedTextField = ({ label, name, rows = 1, inputRef }) => (
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
      rows={rows}
      inputRef={inputRef}
    />
  );

  return (
    <section className="contact" id="contact">
      <Container>
        <Row>
          <Col size={12} sm={12} md={6}>
            <div className="section-header-div">
              <h2 className="section-header" id="skills">
                Contact <span>Me!</span>
                <span className="animate"></span>
              </h2>
            </div>
          </Col>
          <Col size={12} sm={0} md={6} className="hidden-when-mobile">
            <div className="section-header-div">
              <h2
                className="section-header remount"
                style={{ "--animation-seq": 6 }}
              >
                ... or leave me a <span>message!</span>
                <span className="animate"></span>
              </h2>
            </div>
          </Col>
        </Row>
        <form onSubmit={sendEmail}>
          <Row>
            <Col
              className="social-icon contact-method-container"
              sm={12}
              md={6}
            >
              {contactMethods.map((method, index) => (
                <div className="contact-method-row">
                  <div className="contact-method" key={index}>
                    <div className="contact-method-icon">
                      <a href={method.link}>
                        <i className={method.icon}></i>
                      </a>
                    </div>
                    <div className="contact-method-text">
                      <p>{method.text}</p>
                    </div>
                    <span className="animate"></span>
                  </div>
                </div>
              ))}
            </Col>
            <Col className="contact-form" sm={12} md={6}>
              <Row className="contact-form-row">
                <OutlinedTextField
                  label="Name"
                  name="from_name"
                  inputRef={fromNameRef}
                />
                <OutlinedTextField
                  label="Email Address"
                  name="from_email"
                  inputRef={fromEmailRef}
                />
              </Row>
              <Row className="contact-form-row">
                <OutlinedTextField
                  label="Your Message"
                  name="message"
                  rows={10}
                  inputRef={messageRef}
                />
              </Row>
              <Row className="contact-form-row btn-box">
                <button className="btn" type="submit" disabled={loading}>
                  {loading ? <CircularProgress size={24} /> : "Submit"}
                </button>
              </Row>
              <span className="animate"></span>
            </Col>
          </Row>
        </form>
      </Container>
      <div className="gotop-icon-container">
        <div className="gotop-icon">
          <a href="#home">
            <i className="bx bx-up-arrow-alt"></i>
          </a>
        </div>
        <span className="animate"></span>
      </div>
      <Modal
        size="sm"
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button className="modal-btn" variant="primary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};
