import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Navbar1.css";

function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="navi">
      <Navbar expand="sm" className="body-primary" style={{ height: "auto" }}>
        <Container fluid>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{ backgroundColor: "-moz-initial" }}
          >
            <Nav
              className="me-auto my-2 my-lg-0 fw-bold"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                fontFamily: "Museo, sans-serif",
                fontSize: "12.5px",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
              navbarScroll
              variant="black"
            >
              <Nav.Link onClick={() => navigate("/products")}>
                Find a Pet Care Centre
              </Nav.Link>
              <Nav.Link>|</Nav.Link>
              <Nav.Link onClick={() => navigate("/products")}>
                Vets for Pets
              </Nav.Link>
              <Nav.Link>|</Nav.Link>
              <Nav.Link onClick={() => navigate("/products")}>
                Grooming
              </Nav.Link>
              <Nav.Link>|</Nav.Link>
              <Nav.Link onClick={() => navigate("/products")}>
                VIP Club
              </Nav.Link>
              <Nav.Link>|</Nav.Link>
              <Nav.Link onClick={() => navigate("/products")}>
                Pet Insurance
              </Nav.Link>
              <Nav.Link>|</Nav.Link>
              <Nav.Link onClick={() => navigate("/products")}>
                Flea Subscription
              </Nav.Link>
              <Nav.Link>|</Nav.Link>
              <Nav.Link onClick={() => navigate("/products")}>
                Puppy & Kitten Club
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
