import React from 'react';
import { storiesOf } from '@storybook/react';
import ProfileInfo from './';
import user from '../../../fixtures/user';

const story = storiesOf('Default Profile Info', module);

story.add('default', () => (
  <div>
    <ProfileInfo
      name={user.name}
      img={user.img}
      email={user.email}
      location={user.location}
      connection={user.connection}
      summary={user.summary}
    />
  </div>
));
