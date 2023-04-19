import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Navibar = () => {
  return (
    <Navbar
      className="bg-primary"
      variant="dark"
      expand="lg"
      collapseOnSelect
    >
      <div className="container-fluid">
        <Navbar.Brand
          className="navbar-brand px-2"
          href="#home"
        >
          <img
            src="https://logovectordl.com/wp-content/uploads/2021/08/meko-mechanical-keyboard-logo-vector.png"
            alt="Logo"
            width={100}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              style={{ color: "white" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#link"
              style={{ color: "white" }}
            >
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Nav className="d-flex">
          <Nav.Link
            className="me-2 ml-auto"
            style={{ color: "white" }}
          >
            Sign in
          </Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
};

export default Navibar;
