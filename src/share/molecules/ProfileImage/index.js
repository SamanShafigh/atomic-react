import React from 'react';
import PropTypes from 'prop-types';
import { getStyle } from './style.js';

const getSize = (size) => {
  const sizes = {
    default: 80,
    small: 50,
    medium: 120,
    large: 150
  };
  if (sizes[size] === undefined) {
    return sizes.default;
  }

  return sizes[size];
}

const ProfileImage = ({
  url,
  size
}) => (
  <span className={getStyle(url, getSize(size))} />
);

ProfileImage.propTypes = {
  url: PropTypes.string,
  size: PropTypes.string,
}

ProfileImage.defaultProps = {
  size: 'default',
}

export default ProfileImage;
