import React from 'react';
import PropTypes from 'prop-types';
import { getUserNameStyle, getUserEmailStyle, getUserInfoStyle } from './style.js';

import Grid from '../../atoms/Grid';
import Cell from '../../atoms/Cell';
import ProfileImage from '../ProfileImage';

const ProfileInfo = ({
  name,
  email,
  img,
  size
}) => (
  <Grid>
    <Cell width="auto">
      <ProfileImage url={img} size="small" />
    </Cell>
    <Cell width="auto">
      <div className={getUserInfoStyle()}>
        <div className={getUserNameStyle()}>{name}</div>
        <div className={getUserEmailStyle()}>{email}</div>
      </div>
    </Cell>
  </Grid>
);

ProfileInfo.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
}

ProfileInfo.defaultProps = {
  size: 'default',
}

export default ProfileInfo;
