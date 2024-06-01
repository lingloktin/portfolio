import { useState, useRef, useLayoutEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BannerImg from "../assets/img/banner/banner_img.jpg";
import BannerImgHorizontal from "../assets/img/banner/banner_img_horizontal.jpg";
import { ContactConst } from "../constants/ContactConst";

export const Banner = () => {
  const headerRef = useRef(null);
  const [headerWidth, setHeaderWidth] = useState(0);

  const updateHeaderWidth = () => {
    if (headerRef.current) {
      setHeaderWidth(headerRef.current.offsetWidth);
    }
  };

  useLayoutEffect(() => {
    const handleResize = () => {
      requestAnimationFrame(updateHeaderWidth);
    };

    if (document.readyState === "complete") {
      updateHeaderWidth();
    } else {
      window.addEventListener("load", updateHeaderWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", updateHeaderWidth);
    };
  }, []);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="banner-row">
          <Col className="banner-col" xs={12} md={7} xl={7}>
            <h1>
              Hi! I'm Marcus Ling<span className="animate"></span>
            </h1>
            <div className="text-animate">
              <h3
                ref={headerRef}
                style={{ "--header-width": `${headerWidth}px` }}
              >
                Software Engineer&nbsp;
                <span className="animate"></span>
              </h3>
            </div>
            <div className="banner-img-container show-mobile-only remount">
              <img src={BannerImgHorizontal} alt="Banner Horizontal" />
              <span className="animate"></span>
            </div>
            <p>
              Accomplished Software Engineer skilled in full-stack development,
              software engineering, smart contract development, and effective
              database management. Proficiently utilizes modern technologies to
              architect, develop, and implement innovative software solutions.
              Committed to delivering excellence in software engineering and
              holds a Bachelor of Engineering in Computer Science from The
              University of Hong Kong.
              <span className="animate"></span>
            </p>
            <div className="btn-box">
              <a href="#contact" className="btn">
                Contact me
              </a>
              <span className="animate"></span>
            </div>
            <div className="social-icon-row">
              <div className="social-icon">
              {ContactConst
                  .filter((method) => method.inBanner)
                  .map((method, index) => (
                    <a
                      key={index}
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={method.icon}></i>
                    </a>
                  ))}
                <span className="animate"></span>
              </div>
            </div>
          </Col>
          <Col xs={12} md={5} xl={5}>
            <div className="banner-img-container no-show-mobile remount">
              <img src={BannerImg} alt="Banner" />
              <span className="animate"></span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
