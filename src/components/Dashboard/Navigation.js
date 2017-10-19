import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import { Link } from 'react-router';
import Icon from '../../share/atoms/Icon';

const Navigation = ({ user }) => (
  <div className="navigation-header">
    <Link to="/" className="navigation-item">
      <Icon name="ic_home">Home</Icon>
    </Link>
    <Link to={`/profile/${user.id}`} className="navigation-item">
      <Icon name="ic_face">Profile</Icon>
    </Link>
    <Link to={`/network/${user.id}`} className="navigation-item">
      <Icon name="ic_search">Network</Icon>
    </Link>
  </div>
);

Navigation.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    connection: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  }),
}

export default Navigation;
