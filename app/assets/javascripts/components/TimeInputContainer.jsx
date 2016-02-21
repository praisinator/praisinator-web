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
        <Col md={6} sm={6}>
          <DropdownButton title="Start time" id="bg-vertical-dropdown-2">
            <MenuItem eventKey="1">Dropdown link</MenuItem>
            <MenuItem eventKey="2">Dropdown link</MenuItem>
          </DropdownButton>
        </Col>
        <Col md={6} sm={6}>
         <DropdownButton title="End Time" id="bg-vertical-dropdown-3">
          <MenuItem eventKey="1">Dropdown link</MenuItem>
          <MenuItem eventKey="2">Dropdown link</MenuItem>
        </DropdownButton>
        </Col>
      </ButtonGroup>
    );
  }
}

export default TimeInputContainer;