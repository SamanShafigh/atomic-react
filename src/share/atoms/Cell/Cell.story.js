import React from 'react';
import { storiesOf } from '@storybook/react';
import Cell from './';

const buttonStory = storiesOf('Cell', module);

buttonStory.add('sizes', () => (
  <div>
      <Cell>
        Default Cell
      </Cell>
  </div>
));
