import React from 'react';
import { Card } from 'react-bootstrap';

const DailyDevotion = ({ title, date, verse, scripture, explanation, content }) => (
  <Card className="my-3 shadow-sm border-0 rounded">
    <Card.Body>
      <Card.Title className="text-primary">{title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
      <Card.Text>
        <strong>{verse}:</strong> <em>{scripture}</em>
      </Card.Text>
      <Card.Text>{explanation}</Card.Text>
      <Card.Text>{content}</Card.Text>
    </Card.Body>
  </Card>
);

export default DailyDevotion;
