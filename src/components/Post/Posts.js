import React from "react";
import PropTypes from "prop-types";
import Post from "../../share/organisms/Post";
import Panel from "../../share/molecules/Panel";
import Loading from "../../share/atoms/Loading";

const Posts = ({
  posts,
  isLoading,
  likePost,
  dislikePost,
  openPostComments
}) => (
  <Panel title="Today feeds" icon="ic_question_answer">
    <Loading isLoading={isLoading} />
    {posts.map(post => (
      <Post
        post={post}
        key={post.id}
        likePost={likePost}
        dislikePost={dislikePost}
        openPostComments={openPostComments}
      />
    ))}
  </Panel>
);

Posts.propTypes = {
  likePost: PropTypes.func,
  dislikePost: PropTypes.func,
  openPostComments: PropTypes.func,
  isLoading: PropTypes.bool,
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
        img: PropTypes.string
      })
    })
  )
};

export default Posts;
