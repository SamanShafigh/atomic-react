import React from 'react';
import PropTypes from 'prop-types';
import Post from '../../share/organisms/Post';
import Panel from '../../share/molecules/Panel';

const Posts = ({ posts }) => (
  <Panel title="Experience">
    {posts.map((post) => (
      <Post post={post} key={post.id} />
    ))}
  </Panel>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(
      PropTypes.shape({
      id: PropTypes.number,
      summary: PropTypes.string,
      img: PropTypes.string,
      likes: PropTypes.number,
      user: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        email: PropTypes.string,
        img: PropTypes.string,
      }),
    })),
}

export default Posts;
