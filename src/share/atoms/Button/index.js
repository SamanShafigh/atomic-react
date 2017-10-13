import React from 'react';
import PropTypes from 'prop-types';
import { getStyle } from './style.js';

const Button = ({
  onClick,
  children,
  type,
  size,
  disabled = false,
}) => (
  <button onClick={onClick} className={getStyle(size, disabled)}>
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool
}

Button.defaultProps = {
  type: 'default',
  size: 'medium',
  disabled: false
}

export default Button;
