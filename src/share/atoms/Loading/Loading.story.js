import React from 'react';
import { storiesOf } from '@storybook/react';
import Loading from './';

const story = storiesOf('Loading', module);

story.add('default loading', () => (
    <Loading isLoading={true} />
));
