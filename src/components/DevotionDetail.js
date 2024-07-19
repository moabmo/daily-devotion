import React from 'react';
import { Card } from 'react-bootstrap';

const DevotionDetail = ({ devotion }) => (
  <Card className="my-3">
    <Card.Body>
      <Card.Title>{devotion.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{devotion.date}</Card.Subtitle>
      <Card.Text>{devotion.content}</Card.Text>
    </Card.Body>
  </Card>
);

export default DevotionDetail;
