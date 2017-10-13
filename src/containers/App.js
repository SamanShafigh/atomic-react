import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Button from '../share/atoms/Button';
import container from '../Container';
import UsersList from './UsersList'

const components = ['A', 'B', 'C'];

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Button size="small" onClick={() => {}}>Click on me</Button>

          <ul>
            <li><Link to="/users">Users</Link></li>
          </ul>

          {components.map((componentId) => {
            let Component = container.get(componentId);

            return <Component>{componentId}</Component>;
          })}

          <Route path="/users" component={UsersList}/>
        </div>
      </Router>
    );
  }
}

export default App;
