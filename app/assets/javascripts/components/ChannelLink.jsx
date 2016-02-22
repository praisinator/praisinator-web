import React from 'react';
import Relay from 'react-relay';
import Col from 'react-bootstrap/lib/Col';
import { Link } from 'react-router';
import Button from 'react-bootstrap/lib/Button';

class ChannelLink extends React.Component {
  render() {
    return (
      <Link to={`teams/${this.props.teamId}/channels/${this.props.channel.id}`}>
        <Button className="channel-link"> {this.props.channel.name} </Button>
      </Link>
    );
  }
}

export default Relay.createContainer(ChannelLink, {
    fragments: {
        channel: () => Relay.QL`
          fragment on Channel {
            id,
            name
          }
        `
    }
});