import React from 'react';
import Relay from 'react-relay';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import ChannelLink from './ChannelLink';
import TimeInputContainer from './TimeInputContainer';
import ChartWrapper from './ChartWrapper';

class TeamPage extends React.Component {
    renderChannelLinks() {
        var teamId = this.props.team.id;
        return this.props.team.channels.edges.map(({ node }) => <ChannelLink
            key={node.id} channel={node} teamId={teamId}/>);
    }

    renderTimeInputContainer() {
        return <TimeInputContainer/>
    }

    renderCharts() {
        var { tone } = this.props.team;
        return <ChartWrapper key={this.props.team.id} emotional={tone} writing={tone} social={tone}/>
    }

    renderTeam(){
        return(
            <Col md={10} sm={10}>
                <Row>
                    {this.renderTimeInputContainer()}
                </Row>
                <Row>
                    {this.renderCharts()}
                </Row>
            </Col>
        )
    }

    renderTeamOrChannel(){
        var { children } = this.props;
        if (children){
            return children
        } else {
            return this.renderTeam()
        }
    }

    render() {
        return (
            <Grid className="team-page">
                <Row>
                    <Col md={2} sm={2}>
                        <div className='team-wrapper'>
                            <div className="team-logo">
                                <img src={this.props.team.logo_url}/>
                            </div>
                            <div className="team-name">
                                {this.props.team.name}
                            </div>
                        </div>
                        <Col md={12} sm={12}>
                            {this.renderChannelLinks()}
                        </Col>
                    </Col>
                    {this.renderTeamOrChannel()}
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
