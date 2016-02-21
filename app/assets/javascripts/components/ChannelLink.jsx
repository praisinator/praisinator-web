import React from 'react';
import Relay from 'react-relay';
import Col from 'react-bootstrap/lib/Col';
import { Link } from 'react-router';
import Button from 'react-bootstrap/lib/Button';

class ChannelLink extends React.Component {
  constructor(props, context) {
      super(props, context);
    }
  render() {
    return (
      <Link to={'/channel'}>
        <Button className="channel-link"> Channel Name </Button>
      </Link>
    );
  }
}

export default ChannelLink;