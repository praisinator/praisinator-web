import React from "react";
import ReactDOM from "react-dom";
import { IndexRoute, Route, browserHistory, Router } from "react-router";
import PraisinatorApp from "../components/PraisinatorApp";
import LandingPage from "../components/LandingPage";
import TeamPage from "../components/TeamPage";
import Console from "../components/Console";
// import RelayRouter from 'react-router-relay';


ReactDOM.render((
    <Router history={browserHistory}>
        <Route
            path="/" component={PraisinatorApp}
        >
            <IndexRoute
                component={LandingPage}
            />
            <Route
                path="console" component={Console}
            />
            <Route
                path="team" component={TeamPage}
            >
                {/*<Route path=":channel-name" component={ChannelPage} />*/}
            </Route>
        </Route>
    </Router>
), document.getElementById('root'));
