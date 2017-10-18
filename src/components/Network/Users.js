import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../../share/atoms/Grid';
import User from '../../share/molecules/User';

const Users = ({ users, fetchUser }) => (
  <Grid wrap="wrap-reverse">
    {users.map((user) => (
      <User name={user.name} fetchUser={fetchUser} id={user.id} img={user.img} key={user.id} />
    ))}
  </Grid>
);

Users.propTypes = {
  fetchUser: PropTypes.func,
  users: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    img: PropTypes.string,
  }),
}

export default Users;
