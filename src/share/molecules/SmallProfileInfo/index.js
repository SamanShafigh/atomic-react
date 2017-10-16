import React from 'react';
import PropTypes from 'prop-types';
import { getUserNameStyle, getUserEmailStyle, getUserInfoStyle } from './style.js';

import Grid from '../../atoms/Grid';
import Cell from '../../atoms/Cell';
import ProfileImage from '../ProfileImage';

const SmallProfileInfo = ({
  name,
  email,
  img,
  size
}) => (
  <Grid>
    <Cell>
      <ProfileImage url={img} size="small" />
    </Cell>
    <Cell>
      <div className={getUserInfoStyle()}>
        <div className={getUserNameStyle()}>{name}</div>
        <div className={getUserEmailStyle()}>{email}</div>
      </div>
    </Cell>
    <Cell></Cell>
  </Grid>
);

SmallProfileInfo.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
}

SmallProfileInfo.defaultProps = {
  size: 'default',
}

export default SmallProfileInfo;
