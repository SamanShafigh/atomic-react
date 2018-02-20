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

    <pre>{`
        const post = {
          id: 1,
          summary: "Excited to be in Melbourne mentoring smart folks from Indonesia & Australia...",
          img: "",
          likes: 12,
          user: {
            id: 'sina',
            name: 'Sina',
            email: 'sina@gmail.com',
            img: 'static/profile/g.jpg'
          },
        };
        
        return (<Post post={post} 
          likePost={() => {}} 
          dislikePost={() => {}} 
          openPostComments={() => {}} 
        />);
    `}</pre>
  </div>
));
