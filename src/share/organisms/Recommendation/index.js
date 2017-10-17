import React from 'react';
import PropTypes from 'prop-types';

import Grid from '../../atoms/Grid';
import Cell from '../../atoms/Cell';
import ProfileInfo from '../../molecules/ProfileInfo';
import Divider from '../../atoms/Divider';

const Recommendation = ({ recommendation }) => (
  <div>
    <Grid>
      <Cell>
        <ProfileInfo
          name={recommendation.user.name}
          img={recommendation.user.img}
          email={recommendation.user.email}
        />
      </Cell>
    </Grid>
    <Grid>
      <Cell>
        {recommendation.summary}
      </Cell>
    </Grid>
    <Grid>
      <Cell>
        <Divider />
      </Cell>
    </Grid>
  </div>
);

Recommendation.propTypes = {
  recommendation: PropTypes.shape({
    id: PropTypes.number,
    summary: PropTypes.string,
    user: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      email: PropTypes.string,
      img: PropTypes.string,
    }),
  })
}

export default Recommendation;
