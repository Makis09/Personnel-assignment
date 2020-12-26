import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/images/pizzaLogo.png";
import "./NavMenu.css";
import { Link } from "react-router-dom";

export default function NavMenu() {
  return (
    <Navbar expand="lg">
      <Container>
        <Link className="navbar-brand" to="/" style={{ width: "50px" }}>
          <img style={{ maxWidth: "100%" }} src={logo} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
