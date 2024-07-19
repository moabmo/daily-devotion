import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const DevotionDetailPage = ({ devotions }) => {
  const { id } = useParams();
  const devotion = devotions.find((d) => d.id === parseInt(id));

  return (
    <Card className="my-3 shadow-sm border-0 rounded">
      <Card.Body>
        <Card.Title className="text-primary">{devotion.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{devotion.date}</Card.Subtitle>
        <Card.Text>
          <strong>{devotion.verse}:</strong> <em>{devotion.scripture}</em>
        </Card.Text>
        <Card.Text>{devotion.explanation}</Card.Text>
        <Card.Text>{devotion.content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DevotionDetailPage;
