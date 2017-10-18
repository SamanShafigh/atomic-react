import React from 'react';
import PropTypes from 'prop-types';
import { getPanelStyle, getPanelTitleStyle } from './style.js';

import Grid from '../../atoms/Grid';
import Cell from '../../atoms/Cell';
import Icon from '../../atoms/Icon';

const Panel = ({
  children,
  title,
  icon
}) => (
  <div className={getPanelStyle()}>
    <Grid>
      <Cell>
        <div className={getPanelTitleStyle()}>
          {icon !== undefined? <Icon name={icon} size={30}>{title}</Icon> : title }
        </div>
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
  icon: PropTypes.string
}

export default Panel;
