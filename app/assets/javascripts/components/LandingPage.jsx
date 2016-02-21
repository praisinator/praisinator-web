import React from 'react';
import Relay from 'react-relay';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class LandingPage extends React.Component {
  render() {
    return (
    <Grid className="landing-page-content">
      <Row>
        <Col md={12} sm={12}>
          <div className="wordmark"> Headline Text</div>
          <div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6} sm={6}>
          <div> Headline Text</div>
        </Col>
        <Col md={6} sm={6}>
          <div> Video</div>
        </Col>
      </Row>
      <Row>
      <Col md={4} sm={4}>
        <div> Headline Text</div>
      </Col>
      <Col md={4} sm={4}>
        <div> Video</div>
      </Col>
      <Col md={4} sm={4}>
        <div> Video</div>
      </Col>
      </Row>
    </Grid>
    );
  }
}

export default LandingPage;