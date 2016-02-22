import React from 'react';
import Relay from 'react-relay';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import ChartWrapper from './ChartWrapper';

class ChannelPage extends React.Component {
  renderCharts() {
    var { tone } = this.props.channel
    return <ChartWrapper emotional={tone} writing={tone} social={tone} />
  }
  render() {
    return (
      <div> Test </div>
    );
  }
}

export default Relay.createContainer(ChannelPage, {
    fragments: {
        channel: () => Relay.QL`
            fragment on Channel {
                id,
                name,
                tone {
                  ${ChartWrapper.getFragment('emotional')}
                  ${ChartWrapper.getFragment('writing')}
                  ${ChartWrapper.getFragment('social')}
                }
            }
        `
    }
});