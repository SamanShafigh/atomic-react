import React from 'react';
import { storiesOf } from '@storybook/react';
import Divider from './';

const story = storiesOf('Divider', module);

story.add('default', () => (
  <div>
      <Divider />
  </div>
));
