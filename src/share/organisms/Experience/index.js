import React from 'react';
import PropTypes from 'prop-types';
import { getTitleStyle, getDateStyle } from './style.js';

import Grid from '../../atoms/Grid';
import Cell from '../../atoms/Cell';
import Divider from '../../atoms/Divider';

const Experience = ({ experience }) => (
  <div>
    <Grid>
      <Cell>
        <span className={getTitleStyle()}>{experience.title}</span>
        <span className={getDateStyle()}>({experience.date})</span>
      </Cell>
    </Grid>
    <Grid>
      <Cell>
        {experience.summary}
      </Cell>
    </Grid>
    <Grid>
      <Cell>
        <Divider />
      </Cell>
    </Grid>
  </div>
);

Experience.propTypes = {
  experience: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    summary: PropTypes.string,
    date: PropTypes.string,
  })
}

export default Experience;
