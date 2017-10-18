import React from 'react';
import PropTypes from 'prop-types';
import { getStyle } from './style.js';

const Loading = ({
  title,
  isLoading,
}) => (
  isLoading? <span className={getStyle()}>{title}</span> : <span />
);

Loading.propTypes = {
  title: PropTypes.string,
  isLoading: PropTypes.bool
}

Loading.defaultProps = {
  title: ' Posting ...',
  isLoading: false
}

export default Loading;
