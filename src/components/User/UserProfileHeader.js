import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../../share/atoms/Cell';
import Grid from '../../share/atoms/Grid';

const UserProfileHeader = ({user}) => (
  <Grid>
    <Cell>
      #{user.id} {user.name} {user.email}
    </Cell>
  </Grid>
);

UserProfileHeader.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  img: PropTypes.string,
  locations: PropTypes.string,
  connection: PropTypes.number,
  summary: PropTypes.string,
}

export default UserProfileHeader;
