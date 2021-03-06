import React from "react";
import PropTypes from "prop-types";
import Grid from "../../share/atoms/Grid";
import User from "../../share/molecules/User";

const Users = ({ users, fetchUser }) => (
  <Grid wrap="wrap">
    {users.map(user => (
      <User
        name={user.name}
        occupation={user.occupation}
        fetchUser={fetchUser}
        id={user.id}
        img={user.img}
        key={user.id}
      />
    ))}
  </Grid>
);

Users.propTypes = {
  fetchUser: PropTypes.func,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      email: PropTypes.string,
      occupation: PropTypes.string,
      img: PropTypes.string
    })
  )
};

export default Users;
