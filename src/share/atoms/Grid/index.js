import React from 'react';
import PropTypes from 'prop-types';
import { getStyle } from './style.js';

const Grid = ({ children, direction, align, wrap, justify }) => (
  <div className={getStyle(direction, align, wrap, justify)}>{children}</div>
);

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.string,
  align: PropTypes.string,
  wrap: PropTypes.string,
  justify: PropTypes.string
}

Grid.defaultProps = {
  direction: 'row',
  align: 'flex-start',
  wrap: 'nowrap', // nowrap | wrap | wrap-reverse
  justify: 'flex-start', // flex-start | flex-end | center | space-between | space-around | space-evenly
};

export default Grid;
