import React from 'react';
import Relay from 'react-relay';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import ChannelLink from './ChannelLink';
import TimeInputContainer from './TimeInputContainer';

class TeamPage extends React.Component {
  renderChannelLinks() {
    return  (
      <span>
        <ChannelLink/>
        <ChannelLink/>
        <ChannelLink/>
        <ChannelLink/>
      </span>
    )
  }

  renderTimeInputContainer() {
    return <TimeInputContainer/>
  }
  render() {
    return (
      <Grid className="team-page">
        <Row>
          <Col md={4} sm={4}>
            <div className='team-wrapper'>
              <div className="team-logo">
                <img src="https://s3.amazonaws.com/media-p.slid.es/uploads/espenhovlandsdal/images/566501/react-logo-colored.png"/>
              </div>
              <div className="team-name">
                Team Name
              </div>
            </div>
            {this.renderChannelLinks()}
          </Col>
          <Col md={8} sm={8}>
            <Row>
             {this.renderTimeInputContainer()}
            </Row>
            <Row>
              graphs here
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default TeamPage;