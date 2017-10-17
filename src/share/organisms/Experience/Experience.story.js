import React from 'react';
import { storiesOf } from '@storybook/react';
import Experience from './';
import experience from '../../../fixtures/experience';

const story = storiesOf('Experience', module);

story.add('default', () => (
  <div>
    <Experience experience={experience} />
  </div>
));
