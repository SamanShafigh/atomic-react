import React from 'react';
import { storiesOf } from '@storybook/react';
import ProfileImage from './';

const story = storiesOf('Profile Image', module);

story.add('default', () => (
  <div>
    <ProfileImage url="static/profile/profile-smal_03.gif" />
    <ProfileImage url="static/profile/profile-smal_21.gif" />
    <ProfileImage url="static/profile/profile-smal_04.gif" />
    <ProfileImage url="static/profile/profile-smal_23.gif" />
    <ProfileImage url="static/profile/profile-smal_12.gif" />
    <ProfileImage url="static/profile/profile-smal_25.gif" />
    <ProfileImage url="static/profile/profile-smal_27.gif" />
  </div>
));


story.add('size', () => (
  <div>
    <ProfileImage url="static/profile/profile-smal_20.gif" size="small" />
    <ProfileImage url="static/profile/profile-smal_20.gif" />
    <ProfileImage url="static/profile/profile-smal_20.gif" size="medium" />
    <ProfileImage url="static/profile/profile-smal_20.gif" size="large" />
  </div>
));
