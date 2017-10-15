import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from './';
import icons from './icons'

const story = storiesOf('Icon', module);

story.add('size', () => (
  <div>
    <Icon size="21" />
    <Icon size="34" />
    <Icon size="55" />
    <Icon size="89" />
    <Icon size="144" />
  </div>
));

story.add('color', () => (
  <div>
    <Icon size="55" />
    <Icon size="55" color="#2874A6" />
    <Icon size="55" color="#C0392B" />
    <Icon size="55" color="#9B59B6" />
    <Icon size="55" color="#1ABC9C" />
    <Icon size="55" color="#F4D03F" />
  </div>
));

story.add('type', () => (
  <div>
    {Object.keys(icons).map((icon) => (
      <Icon size="33" name={icon} />
    ))}
  </div>
));
