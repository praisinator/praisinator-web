import Relay from 'react-relay';
export default {
    team: (Component) => Relay.QL`
        query {
          node(id: $teamId) {
            ${Component.getFragment('team')},
          },
        }
    `
};
