import Relay from 'react-relay';
export default {
    team: (Component) => Relay.QL`
        query {
          node(id: $id) {
            ${Component.getFragment('team')},
          },
        }
    `,
};
