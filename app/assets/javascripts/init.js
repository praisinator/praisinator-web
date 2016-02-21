import './config/routes';
import { browserHistory } from 'react-router'

require('konami-komando')({
    once: false,
    useCapture: true,
    callback: function() {
        browserHistory.push('/console')
    }
});
