import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuIcon, setMenuIcon] = useState("bx bx-menu");
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const updateActiveLink = () => {
        const sections = [
          "home",
          "experience",
          "projects",
          "skills",
          "contact",
        ];
        let activeSection = "";

        sections.forEach((section) => {
          const element = document.getElementById(section);

          if (element) {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top;
            const elementBottom = rect.bottom;

            if (elementTop <= 100 && elementBottom >= 100) {
              activeSection = section;
            }
          }
        });

        sections.forEach((section) => {
          const navLink = document.querySelector(`[href="#${section}"]`);
          if (section === activeSection) {
            navLink.classList.add("active");
          } else {
            navLink.classList.remove("active");
          }
        });

        setActiveLink(activeSection);
      };

      updateActiveLink();
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    setMenuIcon((prevIcon) =>
      prevIcon === "bx bx-menu" ? "bx bx-x" : "bx bx-menu"
    );
    setExpanded(prevExpanded => !prevExpanded);
  };
  const handleLinkClick = () => {
    setExpanded(false);
    setMenuIcon('bx bx-menu');
  };


  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""} expanded={expanded}>
      <Navbar.Brand href="#">Marcus Ling</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu}>
        {/* <span className="navbar-toggler-icon"></span> */}
        <i className={menuIcon}></i>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link
            href="#home"
            onClick={handleLinkClick}
            className={
              activeLink === "home" ? "active navbar-link" : "navbar-link"
            }
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#experience"
            onClick={handleLinkClick}
            className={
              activeLink === "experience" ? "active navbar-link" : "navbar-link"
            }
          >
            Experience
          </Nav.Link>
          <Nav.Link
            href="#projects"
            onClick={handleLinkClick}
            className={
              activeLink === "projects" ? "active navbar-link" : "navbar-link"
            }
          >
            Projects
          </Nav.Link>
          <Nav.Link
            href="#skills"
            onClick={handleLinkClick}
            className={
              activeLink === "skills" ? "active navbar-link" : "navbar-link"
            }
          >
            Skills
          </Nav.Link>
          <Nav.Link
            href="#contact"
            onClick={handleLinkClick}
            className={
              activeLink === "contact" ? "active navbar-link" : "navbar-link"
            }
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
