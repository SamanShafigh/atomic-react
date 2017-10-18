import React from 'react';
import { connect } from 'react-redux';
import { fetchUser, closeUserModal } from '../redux/actions/user';
import Users from '../components/Network/Users';
import UserModal from '../components/Network/UserModal';

class Network extends React.Component {
  render() {
    return (
      <div>
          <UserModal user={this.props.user} closeUserModal={this.props.closeUserModal} />
          <Users users={this.props.users} fetchUser={this.props.fetchUser} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.network,
  user: state.user,
});

const mapDispatchToProps = {
  fetchUser,
  closeUserModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Network);
