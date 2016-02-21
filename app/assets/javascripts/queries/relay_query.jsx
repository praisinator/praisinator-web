import Relay from 'react-relay';

export default {
    relay: (Component) => Relay.QL`
        query {
            relay {
                ${Component.getFragment('relay')}
            }
        }
    `
};
