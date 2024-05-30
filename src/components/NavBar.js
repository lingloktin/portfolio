import { useState, useEffect, useLayoutEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuIcon, setMenuIcon] = useState("bx bx-menu");
  const [expanded, setExpanded] = useState(false);

  const sections = ["home", "experience", "projects", "skills", "contact"];

  // onscroll animation
  useLayoutEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      let activeSection = "";
      let animatedSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top;
          const elementBottom = rect.bottom;

          if (elementTop <= 100 && elementBottom >= 100) {
            activeSection = section;
          }
          if (elementTop <= 300 && elementBottom >= 300) {
            animatedSection = section;
          }
        }
      });

      sections.forEach((section) => {
        const navLink = document.querySelector(`[href="#${section}"]`);
        const animatedSectionElement = document.getElementById(animatedSection);
        if (section !== activeSection) {
          navLink.classList.remove("active");
        }
        if (section === animatedSection) {
          if (animatedSectionElement) {
            animatedSectionElement.classList.add("show-animate");
          }
        }
      });
      setActiveLink(activeSection);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  // make all elements with class "remount" to show animation once only
  // also remove animation span from elements that are not mounted at first
  useEffect(() => {
    const handleResize = () => {
      const remountElements = document.querySelectorAll(".remount");
      let foundAnimate = false;

      remountElements.forEach((remountElement) => {
        const animateElements = remountElement.querySelectorAll(".animate");

        animateElements.forEach((animateElement) => {
          if (animateElement.offsetWidth === 0) {
            animateElement.remove();
          } else {
            foundAnimate = true;
          }
        });
      });

      if (!foundAnimate) {
        window.removeEventListener("resize", handleResize);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuIcon((prevIcon) =>
      prevIcon === "bx bx-menu" ? "bx bx-x" : "bx bx-menu"
    );
    setExpanded((prevExpanded) => !prevExpanded);
  };
  const handleLinkClick = () => {
    setExpanded(false);
    setMenuIcon("bx bx-menu");
  };

  return (
    <Navbar
      expand="lg"
      className={scrolled ? "scrolled" : ""}
      expanded={expanded}
    >
      <Navbar.Brand className="show-animate" href="#">
        Marcus Ling
        <span className={scrolled ? "animate scrolled" : "animate"}></span>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={toggleMenu}
        className="remount show-animate"
      >
        <i className={menuIcon}></i>
        <span className={scrolled ? "animate scrolled" : "animate"}></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto remount show-animate">
          {sections.map((section) => (
            <Nav.Link
              key={section}
              href={`#${section}`}
              onClick={handleLinkClick}
              className={
                activeLink === section ? "active navbar-link" : "navbar-link"
              }
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Nav.Link>
          ))}
          <span className={scrolled ? "animate scrolled" : "animate"}></span>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
