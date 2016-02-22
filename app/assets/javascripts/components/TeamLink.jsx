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
        <Link to={`/teams/${this.props.team.id}`}>
          <div className="team-logo" onClick={this.props.toggleDrawer}>
            <img src={this.props.team.logo_url}/>
          </div>
          <div className="team-name">
            {this.props.team.name}
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
            id,
            name,
            logo_url
          }
        `
    }
});