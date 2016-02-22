import React from 'react';
import Relay from 'react-relay';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';

class LandingPage extends React.Component {
  render() {
    return (
    <Grid className="landing-page-content">
      <Row>
        <Col lg={12} md={12} sm={12}>
          <h1> Praisinator</h1>
          <p> What's the mood of your team today? Well, now you don't have to
          fret and worry, pour over thousands of messages searching for a hidden clue.
          Now, with the help of state-of-the-art technology you, yes you, can easy identify
          mood of your slack teams and channels. No more sleepless nights wondering what your
          team is feeling, are they happy, sad, angry, fearful...now it's right
          there in front of your face in an easy to see graph.
            <Button className="channel-link"> Go To App </Button>
           </p>

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
        <div> <a href="https://slack.com/oauth/authorize?scope=bot,commands,team%3Aread,users%3Aread,channels%3Aread,channels%3Ahistory&client_id=9094370912.22344990885">
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