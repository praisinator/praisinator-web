import React from 'react';
import Relay from 'react-relay';
import ReactDOM from 'react-dom';
// import RelayRouter from 'react-router-relay';
import { IndexRoute, Route, browserHistory, Router } from 'react-router';
import $ from 'jquery';

import PraisinatorApp from '../components/PraisinatorApp';
import LandingPage from '../components/LandingPage';
import TeamsPage from '../components/TeamsPage';
import TeamPage from '../components/TeamPage';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route
            path="/" component={PraisinatorApp}
        >
        <IndexRoute
          component={LandingPage}
        />
        <Route
          path="teams" component={TeamsPage}
          >
          <Route path=":id" component={TeamPage} />
        </Route>
        </Route>
    </Router>
), document.getElementById('root'));
