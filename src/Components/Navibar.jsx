import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Navibar = () => {
  return (
    <Navbar
      className="bg-primary navbar-dark"
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
            alt=""
            width={120}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Nav className="d-flex">
          <Nav.Link className="me-2 ml-auto">Sign in</Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
};

export default Navibar;
