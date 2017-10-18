import React from 'react';
import PropTypes from 'prop-types';
import { getStyle } from './style.js';

const Input = ({
  onChange,
  value,
  size,
  disabled = false,
}) => (
  <input onChange={(e) => onChange(e)} value={value} className={getStyle(size, disabled)} />
);

Input.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool
}

Input.defaultProps = {
  size: 'medium',
  disabled: false
}

export default Input;
