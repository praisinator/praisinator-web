import Relay from 'react-relay';

export default {
    root: (Component) => Relay.QL`
        query {
            relay {
                ${Component.getFragment('relay')}
            }
        }
    `
};
