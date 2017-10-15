import React from 'react';
import PropTypes from 'prop-types';
import { getStyle } from './style.js';

const Cell = ({
  children,
  ...styleProps
}) => (
  <div className={getStyle(styleProps)}>
    {children}
  </div>
);

Cell.propTypes = {
  children: PropTypes.node.isRequired,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  flexDirection: PropTypes.string,
  size: PropTypes.number,
}

Cell.defaultProps = {
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  size: null,
}

export default Cell;
