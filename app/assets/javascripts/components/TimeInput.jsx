import React from 'react';
import Relay from 'react-relay';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/DropdownButton';

class TimeInput extends React.Component {
  constructor(props, context) {
        super(props, context);
        this.label= props.label;
        this.i = props.i;

    }

  render() {
    return (
      <DropdownButton bsStyle={title.toLowerCase()} title={title} key={i} id={`dropdown-basic-${i}`}>
     <MenuItem eventKey="1">Action</MenuItem>
     <MenuItem eventKey="2">Another action</MenuItem>
     <MenuItem eventKey="3" active>Active Item</MenuItem>
     <MenuItem divider />
     <MenuItem eventKey="4">Separated link</MenuItem>
   </DropdownButton>
    );
  }
}

export default TimeInput;