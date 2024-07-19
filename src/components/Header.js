import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => (
  <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
    <Container>
      <Navbar.Brand as={Link} to="/">
        <img
          src="https://via.placeholder.com/40"
          width="40"
          height="40"
          className="d-inline-block align-top"
          alt="Daily Devotion"
        />{' '}
        Daily Devotion
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/devotions">Devotions</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
