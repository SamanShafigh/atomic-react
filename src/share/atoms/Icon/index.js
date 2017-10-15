import React from 'react';
import PropTypes from 'prop-types';
import { Icon as IconKit } from 'react-icons-kit';
import icons from './icons'

const getIcon = (name) => {
  return icons[name];
}

const Icon = ({
  name,
  size,
  color
}) => (
  <span style={{ color }}>
    <IconKit icon={getIcon(name)} size={size} />
  </span>
);

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
}

Icon.defaultProps = {
  name: 'ic_directions_bike',
  size: 22,
  color: ''
}

export default Icon;
