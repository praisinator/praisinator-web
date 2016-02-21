import React from 'react';
import Relay from 'react-relay';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/DropdownButton';

class TimeInput extends React.Component {
  constructor(props, context) {
        super(props, context);
        this.label= props.label;

    }
  render() {
    return (
    <DropdownButton title={this.label}>
      <MenuItem href="#books">Books</MenuItem>
      <MenuItem href="#podcasts">Podcasts</MenuItem>
      <MenuItem href="#">Tech I Like</MenuItem>
      <MenuItem href="#">About me</MenuItem>
      <MenuItem href="#addBlog">Add a Blog</MenuItem>
    </DropdownButton>
    );
  }
}

export default TimeInput;