import React from 'react';
import Relay from 'react-relay';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
<ButtonToolbar>
    <Button href="#">Link</Button>
    <Button>Button</Button>
  </ButtonToolbar>

class LandingPage extends React.Component {
  render() {
    return (
    <Grid className="landing-page-content">
      <Row>
        <Col lg={12} md={12} sm={12}>
          <h1> Praisinator</h1>
          <p> What's the mood of your team today? Well, now you don't have to
          fret, worry, or pour over thousands of messages searching for a clue.
          With the help of state-of-the-art technology you, <strong>yes you</strong>, can easy identify the
          mood of your Slack teams and channels. No more sleepless nights wondering what your
          team is feeling. Are they happy, sad, angry, fearful...? With Praisinator, you now
          have the answer.
           </p>
           <ButtonToolbar>
             <Button href="/teams/VGVhbS0z"> See it in Action </Button>
             <Button href="https://slack.com/oauth/authorize?scope=bot,commands,team%3Aread,users%3Aread,channels%3Aread,channels%3Ahistory&client_id=9094370912.22344990885"> Try it out for yourself </Button>
           </ButtonToolbar>
        </Col>
      </Row>
      <Row className="sub-text">
      <Col md={4} sm={4}>
          <div className="slack-logo">
            <i className="fa fa-slack"></i>
          </div>
          <h3>It starts with a message </h3>
          <p> With the help of apps like Slack, teams are communicating more than ever. Sharing ideas, frustrations,
          problem-solving, posting gifs; every time your team starts a conversation, our app starts crunching.
          So, we're there through all the conversation's ups and downs. </p>
      </Col>
      <Col md={4} sm={4}>
          <div className="slack-logo">
            <i className="fa fa-smile-o"></i>
          </div>
          <h3>It captures a mood </h3>
          <p> There's a lot of chatter and emotions that occur throughout the day.
              When you're just popping in and out of the conversation, how can you really tell if you're reading the mood properly?
              Maybe you just caught a bad moment. Now you can get a sense of the overall mood of each team and channel without the wonder or worry. </p>
      </Col>
      <Col md={4} sm={4}>
        <div className="slack-logo">
          <i className="fa fa-pie-chart"></i>
        </div>
        <h3> It tells a story  </h3>
        <p> You can delve into the day, week or hour of your teams experiences and see the emotions, sentiment,
            and attitudes. Become an analytical master of mood, and uncover the feelings and state of mind
            that tells the story of a teams life together. </p>
      </Col>
      </Row>
    </Grid>
    );
  }
}

export default LandingPage;