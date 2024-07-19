import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DevotionList from '../components/DevotionList';

const DevotionPage = ({ devotions, selectDevotion }) => (
  <Container>
    <Row>
      <Col>
        <h4>Past Devotions</h4>
        <DevotionList devotions={devotions} selectDevotion={selectDevotion} />
      </Col>
    </Row>
  </Container>
);

export default DevotionPage;
