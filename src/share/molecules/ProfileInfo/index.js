import React from 'react';
import PropTypes from 'prop-types';
import { getUserNameStyle, getUserSummaryStyle } from './style.js';

import Grid from '../../atoms/Grid';
import Cell from '../../atoms/Cell';
import ProfileImage from '../ProfileImage';
import Icon from '../../atoms/Icon';

const ProfileInfo = ({
  name,
  location,
  connection,
  email,
  img,
  summary
}) => (
  <div>
    <Grid justify="center">
      <Cell>
        <ProfileImage url={img} size="medium" />
      </Cell>
    </Grid>
    <Grid justify="center">
      <Cell>
        <div className={getUserNameStyle()}>{name}</div>
      </Cell>
    </Grid>
    <Grid justify="center">
      <Cell>
        {location}
      </Cell>
      <Cell>
        <Icon name="ic_supervisor_account">{connection}+</Icon>
      </Cell>
    </Grid>
    <Grid justify="center">
      <Cell>
          <div className={getUserSummaryStyle()}>{summary}</div>
      </Cell>
    </Grid>
  </div>
);

ProfileInfo.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  connection: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
}

export default ProfileInfo;
