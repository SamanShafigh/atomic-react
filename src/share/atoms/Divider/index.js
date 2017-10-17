import React from 'react';
import PropTypes from 'prop-types';
import { getStyle } from './style.js';

const Divider = ({
  children,
  ...styleProps
}) => (
  <hr className={getStyle()} />
);

Divider.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  flexDirection: PropTypes.string,
  size: PropTypes.number,
}

Divider.defaultProps = {
  width: '100%',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexDirection: 'row',
  size: null,
}

export default Divider;
