import React from 'react';
import PropTypes from 'prop-types';
import Post from "../../share/organisms/Post";

const Posts = ({ posts }) => (
  <div>
    {posts.map((post) => (
      <Post post={post} key={post.id} />
    ))}
  </div>
);

Posts.propTypes = {
  posts: PropTypes.shape({
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
  }),
}

export default Posts;
