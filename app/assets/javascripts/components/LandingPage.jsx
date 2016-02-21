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
        <div> <a href="https://slack.com/oauth/authorize?scope=bot,team%3Aread,users%3Aread,channels%3Aread&amp;client_id=9094370912.22344990885">
  <img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x "/>
</a></div>
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