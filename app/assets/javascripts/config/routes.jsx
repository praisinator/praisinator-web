import React from "react";
import ReactDOM from "react-dom";
import createHashHistory from 'history/lib/createHashHistory';
import { IndexRoute, Route, browserHistory, Router } from "react-router";
import PraisinatorApp from "../components/PraisinatorApp";
import LandingPage from "../components/LandingPage";
import TeamPage from "../components/TeamPage";
import Console from "../components/Console";
import { RelayRouter } from 'react-router-relay';

import RelayQuery from '../queries/relay_query';
import TeamQuery from '../queries/team_query';

ReactDOM.render((
    <RelayRouter history={browserHistory}>
        <Route
            path="/"
            component={PraisinatorApp}
            queries={RelayQuery}
        >
            <IndexRoute
                component={LandingPage}
            />
            {/*}<Route
                path="console" component={Console}
            />
            <Route
                path="team" component={TeamPage} queries={TeamQuery}
            >
                <Route path=":channel-name" component={ChannelPage} />
            </Route>*/}
        </Route>
    </RelayRouter>
), document.getElementById('root'));
