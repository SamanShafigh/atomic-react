import React from 'react';
import { storiesOf } from '@storybook/react';
import Grid from './';

const buttonStory = storiesOf('Grid', module);

buttonStory.add('default', () => (
  <div>
      <Grid>
        Default Grid
      </Grid>
  </div>
));
