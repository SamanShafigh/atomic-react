import React from 'react';
import UserProfileHeader from '../components/User/UserProfileHeader';
import { USER } from '../fixtures/UserFixtures';

class UsersList extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.setState({user: USER });
  }

  render() {
    return (
      <div>
        <UserProfileHeader />
      </div>
    );
  }
}

export default UsersList;
