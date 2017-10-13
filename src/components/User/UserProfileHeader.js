import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../share/atoms/Cell';

const UserProfileHeader = ({user}) => (
  <Cell>
    #{user.id} {user.name} {user.email}
  </Cell>
);

UserProfileHeader.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  img: PropTypes.string,
  locations: PropTypes.string,
  connection: PropTypes.number,
  summary: PropTypes.string,
}

export default UserProfileHeader;
