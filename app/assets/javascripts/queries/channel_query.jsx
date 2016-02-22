import Relay from 'react-relay';
export default{
    channel: (Component) => Relay.QL`
        query {
          node(id: $channelId) {
            ${Component.getFragment('channel')},
          },
        }
    `,
};
