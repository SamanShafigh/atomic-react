import React from 'react';
import { storiesOf } from '@storybook/react';
import PostComment from './';
import comments from '../../../fixtures/comments';

const story = storiesOf('Post Comment', module);

story.add('default', () => (
	<div>
		<PostComment comment={comments[0]} />
	</div>
));

