import React from 'react';
import PropTypes from 'prop-types';
import { getStyle } from './style.js';

const Cell = ({
  children,
  type,
  size
}) => (
  <div className={getStyle(size)}>
    {children}
  </div>
);

Cell.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  size: PropTypes.string,
}

Cell.defaultProps = {
  type: 'default',
  size: 'medium',
}

export default Cell;
