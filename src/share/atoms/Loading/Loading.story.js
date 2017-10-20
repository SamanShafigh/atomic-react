import React from 'react';
import { storiesOf } from '@storybook/react';
import Loading from './';

const story = storiesOf('Loading', module);

story.add('default loading', () => (
  <div>
    Sample text <Loading isLoading={true} /> with loading
  </div>
));
