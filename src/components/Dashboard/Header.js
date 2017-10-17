import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import ProfileInfo from '../../share/organisms/ProfileInfo';
import Navigation from './Navigation';
import Grid from '../../share/atoms/Grid';
import Cell from '../../share/atoms/Cell';

const Header = ({ user }) => (
  <div>
    <Grid>
      <Cell>
        <Navigation user={user} />
      </Cell>
    </Grid>
    <Grid>
      <Cell>
        <ProfileInfo
          name={user.name}
          img={user.img}
          email={user.email}
          location={user.location}
          connection={user.connection}
          summary={user.summary}
          link={`/profile/${user.id}`}
        />
      </Cell>
    </Grid>
  </div>
);

Header.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    connection: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  }),
}

export default Header;
