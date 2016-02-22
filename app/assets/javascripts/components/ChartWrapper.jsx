import React from 'react';
import Relay from 'react-relay';
import Col from 'react-bootstrap/lib/Col';
import Chart from './Chart'

class ChartWrapper extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <Col md={12} sm={12} className="chart-wrapper">
      <Chart data={this.props.emotional} prefix="emotional_" title="Emotions" />
      <Chart data={this.props.writing} prefix="writing_" title="Writing" />
      <Chart data={this.props.social} prefix="social_" title="Social" />
      </Col>
    );
  }
}

const Container = Relay.createContainer(ChartWrapper, {
    fragments: {
        emotional: () => Relay.QL`
          fragment on Tone {
            emotional_sadness,
            emotional_disgust,
            emotional_fear,
            emotional_anger,
            emotional_joy
          }
        `,
        writing: () => Relay.QL`
          fragment on Tone {
            writing_analytical,
            writing_confident,
            writing_tentative,
          }
        `,
        social: () => Relay.QL`
          fragment on Tone {
            social_openness,
            social_conscientiousness,
            social_extraversion,
            social_agreeableness
          }
        `
    }
});

export default Container