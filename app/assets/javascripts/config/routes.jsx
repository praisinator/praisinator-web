import React from "react";
import ReactDOM from "react-dom";
import createHashHistory from 'history/lib/createHashHistory';
import { IndexRoute, Route, browserHistory, Router } from "react-router";
import PraisinatorApp from "../components/PraisinatorApp";
import LandingPage from "../components/LandingPage";
import TeamPage from "../components/TeamPage";
import ChannelPage from '../components/ChannelPage';
import Console from "../components/Console";
import { RelayRouter } from 'react-router-relay';

import RootQuery from '../queries/root_query';
import TeamQuery from '../queries/team_query';
import ChannelQuery from '../queries/channel_query';

ReactDOM.render((
    <RelayRouter history={browserHistory}>
        <Route path="/" component={PraisinatorApp} queries={RootQuery}>
            <IndexRoute component={LandingPage}/>
            <Route path="console" component={Console}/>
<<<<<<< HEAD
            <Route path="teams/:id" component={TeamPage} queries={TeamQuery}>
              <Route path="channels/:id" component={ChannelPage} queries={ChannelQuery} />
=======
            <Route path="teams/:teamId" component={TeamPage} queries={TeamQuery}>
                <Route path="channels/:channelId" component={ChannelPage} queries={ChannelQuery} />
>>>>>>> 5692b23d7d2c89dfae0e86da5648d1efe1a5ea5a
            </Route>
        </Route>
    </RelayRouter>
), document.getElementById('root'));
