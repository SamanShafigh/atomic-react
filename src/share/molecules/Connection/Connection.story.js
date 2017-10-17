import React from 'react';
import { storiesOf } from '@storybook/react';
import Connection from './';
import user from '../../../fixtures/user';

const story = storiesOf('Connection', module);

story.add('default', () => (
  <div>
    <Connection name={user.name} img={user.img} />
  </div>
));
