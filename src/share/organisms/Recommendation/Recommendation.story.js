import React from 'react';
import { storiesOf } from '@storybook/react';
import Recommendation from './';
import recommendation from '../../../fixtures/recommendation';

const story = storiesOf('Recommendation', module);

story.add('default', () => (
  <div>
    <Recommendation recommendation={recommendation} />
  </div>
));
