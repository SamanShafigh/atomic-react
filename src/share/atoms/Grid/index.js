import React from 'react';
import PropTypes from 'prop-types';
import { getStyle } from './style.js';

const Grid = ({ children, direction }) => (
  <div className={getStyle(direction)}>{children}</div>
);

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.string,
}

Grid.defaultProps = {
  direction: 'row',
};

export default Grid;
