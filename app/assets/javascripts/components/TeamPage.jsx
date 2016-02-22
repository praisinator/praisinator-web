import React from 'react';
import Relay from 'react-relay';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import ChannelLink from './ChannelLink';
import TimeInputContainer from './TimeInputContainer';
import ChartWrapper from './ChartWrapper';

class TeamPage extends React.Component {
  getInitialState() {
    return { team: this.props.team }
  }
  renderChannelLinks() {
    var teamId = this.props.team.id;
    return this.props.team.channels.edges.map(({node}) => <ChannelLink key={node.id} channel={node} teamId={teamId}/>);
  }

  renderTimeInputContainer() {
    return <TimeInputContainer/>
  }

  renderCharts() {
      console.log(this.props.team.name);

    var { tone } = this.state.team
    //
    // if (this.props.children){
    //   return this.props.children
    // } else {
      return <ChartWrapper emotional={tone} writing={tone} social={tone} />
    // }

  }
  render() {
    return (
      <Grid className="team-page">
        <Row>
          <Col md={4} sm={4}>
            <div className='team-wrapper'>
              <div className="team-logo">
                <img src={this.props.team.logo_url}/>
              </div>
              <div className="team-name">
                {this.props.team.name}
              </div>
            </div>
            <Row>
            <Col md={4} sm={4}>
              {this.renderChannelLinks()}
            </Col>
            </Row>
          </Col>
          <Col md={8} sm={8}>
            <Row>
             {this.renderTimeInputContainer()}
            </Row>
            <Row>
              {this.renderCharts()}
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Relay.createContainer(TeamPage, {
    fragments: {
        team: () => Relay.QL`
            fragment on Team {
                id,
                name,
                logo_url,
                tone {
                  ${ChartWrapper.getFragment('emotional')}
                  ${ChartWrapper.getFragment('writing')}
                  ${ChartWrapper.getFragment('social')}
                },
                channels(first: 10) {
                  edges {
                    node {
                      id
                      ${ChannelLink.getFragment('channel')}
                    }
                  }
                }
            }
        `
    }
});