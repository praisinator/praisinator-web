import React from 'react';
import Relay from 'react-relay';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import TimeInputContainer from './TimeInputContainer';
import ChartWrapper from './ChartWrapper';

class ChannelPage extends React.Component {

    renderTimeInputContainer() {
        return <TimeInputContainer/>
    }

    render() {
        let { channel } = this.props;
        let { tone } = channel;
        return (
        <span>
            <Row>
                {this.renderTimeInputContainer()}
            </Row>
            <Row>
                <ChartWrapper key={channel.id} emotional={tone} writing={tone} social={tone}/>
            </Row>
        </span>
        )
    }
}

export default Relay.createContainer(ChannelPage, {
    fragments: {
        channel: () => Relay.QL`
            fragment on Channel {
                id,
                name
                tone {
                  ${ChartWrapper.getFragment('emotional')}
                  ${ChartWrapper.getFragment('writing')}
                  ${ChartWrapper.getFragment('social')}
                },
            }
        `
    }
});
