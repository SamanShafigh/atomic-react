import React from 'react';
import PropTypes from 'prop-types';
import { Icon as IconKit } from 'react-icons-kit';
import { getTextStyle, getWrapperStyle } from './style.js';
import icons from './icons'

/**
 *
 * @param name
 * @param size
 * @returns {XML}
 */
const getIcon = (name, size) => {
  const icon = icons[name];
  return <IconKit icon={icon} size={size} />;
}

/**
 *
 * @param text
 * @returns {*}
 */
const getIconText = (text) => {
  if (text) {
    return <span className={getTextStyle()}>{text}</span>;
  }
}

/**
 *
 * @param children
 * @param name
 * @param size
 * @param title
 * @param color
 * @constructor
 */
const Icon = ({
  children,
  name,
  size,
  title,
  color
}) => (
  <span className={getWrapperStyle(color)} title={title}>
    {getIcon(name, size)} {getIconText(children)}
  </span>
);

Icon.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  title: PropTypes.string,
  color: PropTypes.string,
}

Icon.defaultProps = {
  name: 'ic_directions_bike',
  size: 22,
  title: '',
  color: ''
}

export default Icon;
