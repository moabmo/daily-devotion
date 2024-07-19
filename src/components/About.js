import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => (
  <Container id="about" className="my-5">
    <Row>
      <Col>
        <Card className="shadow-sm border-0 rounded">
          <Card.Body>
            <Card.Title>About Daily Devotion</Card.Title>
            <Card.Text>
              Daily Devotion is a platform to provide you with daily spiritual nourishment. Our mission is to inspire and uplift individuals through daily readings and reflections. Join us on this journey of faith and spirituality.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default About;
