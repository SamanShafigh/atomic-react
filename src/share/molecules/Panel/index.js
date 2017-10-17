import React from 'react';
import PropTypes from 'prop-types';
import { getPanelStyle, getPanelTitleStyle } from './style.js';

import Grid from '../../atoms/Grid';
import Cell from '../../atoms/Cell';

const Panel = ({
  children,
  title,
  summary
}) => (
  <div className={getPanelStyle()}>
    <Grid>
      <Cell>
        <div className={getPanelTitleStyle()}>{title}</div>
      </Cell>
    </Grid>
    <Grid>
      <Cell>
        <div>
          {children}
        </div>
      </Cell>
    </Grid>
  </div>
);

Panel.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
}

export default Panel;
