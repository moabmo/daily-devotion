import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <footer className="bg-dark text-white py-4 mt-5">
    <Container>
      <Row>
        <Col className="text-center">
          <p>&copy; moabmo 2024 Daily Devotion. All Rights Reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
