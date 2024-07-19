import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DevotionList = ({ devotions }) => (
  <ListGroup className="shadow-sm">
    {devotions.map((devotion, index) => (
      <ListGroup.Item key={index} action>
        <Link to={`/devotion/${devotion.id}`}>
          {devotion.title} - {devotion.date}
        </Link>
      </ListGroup.Item>
    ))}
  </ListGroup>
);

export default DevotionList;
