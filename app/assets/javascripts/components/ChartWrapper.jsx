import React from 'react';
import Relay from 'react-relay';
import Col from 'react-bootstrap/lib/Col';
import Chart from './Chart'


var sampleData = [
  {id: '5fbmzmtc', x: 7, y: 41, z: 6},
  {id: 's4f8phwm', x: 11, y: 45, z: 9},
  // ...
];
class ChartWrapper extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: sampleData,
      domain: {x: [0, 30], y: [0, 100]}
    };
  }

  render() {
    return (
      <Col md={12} sm={12}>
      <Chart
        data={this.state.data}
        domain={this.state.domain} />
      </Col>
    );
  }
}

export default ChartWrapper;
