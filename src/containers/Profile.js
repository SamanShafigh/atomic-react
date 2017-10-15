import React from 'react';
import UserProfileHeader from '../components/User/UserProfileHeader';

class Profile extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        This is profile page
        <UserProfileHeader />
      </div>
    );
  }
}

export default Profile;
