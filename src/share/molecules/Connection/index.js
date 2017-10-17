import React from 'react';
import PropTypes from 'prop-types';
import { getConnectionStyle } from './style.js';

import Grid from '../../atoms/Grid';
import Cell from '../../atoms/Cell';
import ProfileImage from '../ProfileImage';

const Connection = ({
  name,
  img
}) => (
  <span className={getConnectionStyle()}>
    <ProfileImage url={img} size="small" title={name} />
  </span>
);

Connection.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}

export default Connection;
