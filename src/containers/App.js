import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

// Import story
import store, { history } from '../redux/store';

// Import containers
import Dashboard from './Dashboard';
import Home from './Home';
import Profile from './Profile';
import Network from './Network';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>

          <Route path="/" component={Dashboard}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="/network/:userId" component={Network}></Route>
            <Route path="/profile/:userId" component={Profile}></Route>
          </Route>

        </Router>
      </Provider>
    );
  }
}

export default App;
