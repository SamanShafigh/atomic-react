import React from 'react';
import UserItem from '../components/User/UserItem';

class Network extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
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

export default Network;
