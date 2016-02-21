import React from 'react';
import Relay from 'react-relay';
import Col from 'react-bootstrap/lib/Col';
import { Link } from 'react-router';

class TeamLink extends React.Component {
  constructor(props, context) {
      super(props, context);
    }
  render() {
    return (
      <Col md={4} className="team-link-container">
        <Link to={'/team'}>
          <div className="team-logo" onClick={this.props.toggleDrawer}>
            <img src="https://s3.amazonaws.com/media-p.slid.es/uploads/espenhovlandsdal/images/566501/react-logo-colored.png"/>
          </div>
          <div className="team-name">
            Team Name
          </div>
        </Link>
      </Col>
    );
  }
}

export default Relay.createContainer(TeamLink, {
    fragments: {
        team: () => Relay.QL`
          fragment on Team {
            name,
            id
          }
        `
    }
});