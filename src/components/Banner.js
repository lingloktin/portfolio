import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import bannerImg from "../assets/img/banner/banner_img.jpg";
import bannerImgHorizontal from "../assets/img/banner/banner_img_horizontal.jpg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Software Developer", "Programmer", "Web Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="banner-row">
          <Col className="banner-col" xs={12} md={7} xl={7}>
            <h1>Hi! I'm Marcus Ling</h1>
            <div className="text-animate">
              <h3
              // className="txt-rotate"
              // dataPeriod="2000"
              // data-rotate='[ "Software Developer", "Programmer", "Web Developer" ]'
              >
                {/* {text} */}
                Software Engineer
              </h3>
            </div>
            <div className="banner-img-container show-mobile-only">
              <img src={bannerImgHorizontal} alt="Banner" />
            </div>
            <p>
              Accomplished Software Engineer skilled in full-stack development,
              software engineering, smart contract development, and effective
              database management. Proficiently utilizes modern technologies to
              architect, develop, and implement innovative software solutions.
              Committed to delivering excellence in software engineering and
              holds a Bachelor of Engineering in Computer Science from The
              University of Hong Kong.
            </p>
            <div className="btn-box">
              <a href="#contact" className="btn">
                Contact me
              </a>
            </div>
            <div className="social-icon-row">
              <div className="social-icon">
                <a href="#">
                  <i class="bx bxl-github"></i>
                </a>
                <a href="#">
                  <i class="bx bxl-linkedin"></i>
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={5} xl={5}>
            <div className="banner-img-container no-show-mobile">
              <img src={bannerImg} alt="Banner" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
