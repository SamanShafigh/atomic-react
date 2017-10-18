import React from 'react';
import PropTypes from 'prop-types';
import { getUserContainerStyle, getUserNameStyle, getUserImageStyle } from './style.js';

import ProfileImage from '../ProfileImage';

const User = ({
  fetchUser,
  id,
  name,
  img
}) => (
  <div className={getUserContainerStyle()}>
    <div className={getUserImageStyle()}>
      <ProfileImage url={img} title={name} />
    </div>
    <div className={getUserNameStyle()}>
      <a onClick={() => fetchUser(id)}>{name}</a>
    </div>
  </div>
);

User.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}

export default User;
