import React from 'react';
import { storiesOf } from '@storybook/react';
import Post from './';
import post from '../../../fixtures/post';

const newPost = {...post};
newPost.isPosting = true;

const story = storiesOf('Post', module);

story.add('default', () => (
  <div>
    <Post post={post} />
  </div>
));

story.add('posting post', () => (
  <div>
    <Post post={newPost}  />
  </div>
));
