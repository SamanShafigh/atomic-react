import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './';

const story = storiesOf('Input', module);

story.add('default', () => (
  <div>
    <div>
      <Input onClick={() => {}} value="Sample data" />
    </div>
  </div>
));
