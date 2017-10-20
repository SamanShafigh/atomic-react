import React from 'react';
import PropTypes from 'prop-types';
import { getTitleStyle, getDateStyle } from './style.js';

import Grid from '../../atoms/Grid';
import Cell from '../../atoms/Cell';

const News = ({ news }) => (
  <div>
    <Grid>
      <Cell>
        <span className={getTitleStyle()}>{news.title}</span>
      </Cell>
    </Grid>
    <Grid>
      <Cell>
        <span className={getDateStyle()}>({news.date})</span>
        {news.summary}
      </Cell>
    </Grid>
  </div>
);

News.propTypes = {
  news: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    summary: PropTypes.string,
    date: PropTypes.string,
  })
}

export default News;
