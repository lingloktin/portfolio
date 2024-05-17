import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const updateActiveLink = () => {
        const sections = ['home', 'experience', 'projects', 'skills', 'contact'];
        let activeSection = '';

        sections.forEach(section => {
          const element = document.getElementById(section);
          if (element && element.getBoundingClientRect().top <= window.innerHeight && element.getBoundingClientRect().bottom >= 0) {
            activeSection = section;
          }
        });

        setActiveLink(activeSection);
      };

      updateActiveLink();
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Navbar expand="md" className={scrolled? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">Marcus Ling</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home'? 'active navbar-link' : 'navbar-link'}>Home</Nav.Link>
            <Nav.Link href="#experience" className={activeLink === 'experience'? 'active navbar-link' : 'navbar-link'}>Experience</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects'? 'active navbar-link' : 'navbar-link'}>Projects</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills'? 'active navbar-link' : 'navbar-link'}>Skills</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact'? 'active navbar-link' : 'navbar-link'}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};