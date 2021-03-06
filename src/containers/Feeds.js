import React from "react";
import { connect } from "react-redux";
import {
  fetchPosts,
  addPost,
  likePost,
  dislikePost
} from "../redux/actions/posts";

import Posts from "../components/Post/Posts";
import WritePost from "../components/Post/WritePost";

class Feeds extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <WritePost user={this.props.profile} addPost={this.props.addPost} />
        <Posts
          posts={this.props.posts}
          likePost={this.props.likePost}
          dislikePost={this.props.dislikePost}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  profile: state.profile
});

const mapDispatchToProps = {
  fetchPosts,
  addPost,
  likePost,
  dislikePost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feeds);
