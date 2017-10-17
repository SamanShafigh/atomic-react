import React from 'react';
import ProfileInfo from '../share/molecules/ProfileInfo'

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
          <ProfileInfo key={index} user={user} />
        ))}
      </div>
    );
  }
}

export default Network;
