import { useState, useEffect } from "react";
import { Navbar, Container , Nav } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  const onUpdateActivateLink = (value) => {
    setActiveLink(value);
  }
  return (
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
             <h2
               style={{color: '#dc307aff', fontWeight: 'bold'}}>Keerthana M
             </h2>
           </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActivateLink ('home')}>Home</Nav.Link>
              <Nav.Link href="#skills"className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActivateLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActivateLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="/keerthana m.pdf" target="_blank" rel="noopener noreferrer"className="navbar-link">Resume</Nav.Link>

            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/keerthanam19" target="_blank" rel="noopener noreferrer">
                 <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a href="https://github.com/keerthana-m-19" target="_blank" rel="noopener noreferrer">
                 <img src={navIcon2} alt="GitHub" />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=keerthanam6750@gmail.com" target="_blank" rel="noopener noreferrer">
                 <img src={navIcon3} alt="Gmail" />
                </a>
                
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}