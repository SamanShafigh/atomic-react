import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../redux/actions/user';
import Users from '../components/Network/Users';

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
          <Users users={this.props.users} fetchUser={this.props.fetchUser} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.network,
});

const mapDispatchToProps = {
  fetchUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Network);
