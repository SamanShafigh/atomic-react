import React from 'react';
import { storiesOf } from '@storybook/react';
import News from './';
import news from '../../../fixtures/news';

const story = storiesOf('News', module);

story.add('default', () => (
  <div>
    <News news={news} />
  </div>
));
