import React from 'react';
import Relay from 'react-relay';
import Col from 'react-bootstrap/lib/Col';

import TimeInput from './TimeInput';

class TimeInputContainer extends React.Component {
  renderTimeStartInput() {
    return <TimeInput label="Start Time"/>
  }
  renderTimeEndInput() {
    return <TimeInput label="End Time"/>
  }

  render() {
    return (
      <span>
        <Col md={6} sm={6}> {this.renderTimeStartInput()}</Col>
        <Col md={6} sm={6}> {this.renderTimeEndInput()}</Col>
      </span>
    );
  }
}

export default TimeInputContainer;