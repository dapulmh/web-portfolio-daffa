import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { SetStateAction, useEffect, useState } from "react";
import logo from "../assets/logo_personal.png";
import icon1 from "../assets/nav-icon1.svg";
import icon2 from "../assets/nav-icon2.svg";
import icon3 from "../assets/nav-icon3.svg";
import icon5 from "../assets/github.png";
import { BrowserRouter as Router } from "react-router-dom";

function NavbarComponent() {
  const [linkStatus, setLink] = useState("home");
  const [scrollStatus, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });

  const onUpdateLink = (value: SetStateAction<string>) => {
    setLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrollStatus ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/web-portfolio-daffa/#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toogler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  linkStatus == "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateLink("home")}
              >
                Profile
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  linkStatus == "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateLink("skills")}
              >
                Skills
              </Nav.Link>
              {/* <Nav.Link
              href="#projects"
              className={
                linkStatus == "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#certificates"
              className={
                linkStatus == "certificates"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateLink("certificates")}
            >
              Certificates
            </Nav.Link> */}
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="">
                  <img src={icon1} alt="linked"></img>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100012300432605">
                  <img src={icon2} alt="face"></img>
                </a>
                <a href="https://www.instagram.com/dapulmh/">
                  <img src={icon3} alt="ig"></img>
                </a>
                <a href="https://github.com/dapulmh/">
                  <img src={icon5} alt="github"></img>
                </a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}

export default NavbarComponent;
