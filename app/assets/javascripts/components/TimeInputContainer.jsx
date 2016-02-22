import React from 'react';
import Relay from 'react-relay';
import Col from 'react-bootstrap/lib/Col';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

import TimeInput from './TimeInput';

class TimeInputContainer extends React.Component {
  renderTimeStartInput() {
    return <TimeInput label="Start Time" i={1}/>
  }
  renderTimeEndInput() {
    return <TimeInput label="End Time" i={2}/>
  }

  render() {
    return (
      <ButtonGroup className="time-buttons">
        <Col md={12} sm={12}>
         <DropdownButton title="Select Time Range" id="bg-vertical-dropdown-3">
          <MenuItem eventKey="1">Last Hour</MenuItem>
          <MenuItem eventKey="2">Last Day</MenuItem>
          <MenuItem eventKey="2">Last Week</MenuItem>
        </DropdownButton>
        </Col>
      </ButtonGroup>
    );
  }
}

export default TimeInputContainer;