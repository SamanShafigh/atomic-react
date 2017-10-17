import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import { history } from '../redux/store';

// Import containers
import Dashboard from '../containers/Dashboard';
import Feeds from '../containers/Feeds';
import Profile from '../containers/Profile';
import Network from '../containers/Network';

class AppRoute extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={Dashboard}>
          <IndexRoute component={Feeds}></IndexRoute>
          <Route path="/profile/:userId" component={Profile}></Route>
          <Route path="/network/:userId" component={Network}></Route>
        </Route>
      </Router>
    );
  }
}

export default AppRoute;
