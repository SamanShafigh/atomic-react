import React from 'react';
import { connect } from 'react-redux';

import Connections from '../components/User/Connections';
import Experiences from '../components/User/Experiences';
import Recommendations from '../components/User/Recommendations';

class Profile extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
  }

  render() {
    const user = this.props.profile;

    return (
      <div>
        <Connections friends={ user.friends } />
        <Experiences experiences={ user.experiences } />
        <Recommendations recommendations={ user.recommendations } />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);