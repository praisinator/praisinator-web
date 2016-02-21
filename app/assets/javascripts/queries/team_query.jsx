import Relay from 'react-relay';
export default {
    list: (Component) => Relay.QL`
        query {
          node(id: $id) {
            ${Component.getFragment('team')},
          },
        }
    `,
};
