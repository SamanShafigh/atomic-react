import React from 'react';
import UserItem from '../components/User/UserItem';
import { USERS } from '../fixtures/UserFixtures';

class UsersList extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    this.setState({users: USERS });
  }

  render() {
    return (
      <div>
        User list
        {this.state.users.map((user, index) => (
          <UserItem key={index} user={user} />
        ))}
      </div>
    );
  }
}

export default UsersList;
