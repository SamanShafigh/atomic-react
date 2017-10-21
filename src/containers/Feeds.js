import React from 'react';
import { connect } from 'react-redux';
import {
  fetchPosts,
  addPost,
  likePost,
  dislikePost,
	openPostComments,
	closePostComments
} from '../redux/actions/posts'

import Posts from '../components/Post/Posts';
import WritePost from '../components/Post/WritePost';
import CommentsModal from '../components/Post/CommentsModal';

class Feeds extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <WritePost
          user={this.props.profile}
          addPost={this.props.addPost}
        />
        <CommentsModal
          addComment={()=>{}}
          comments={this.props.comments}
          isVisible={this.props.status.commenting}
          postId={this.props.status.postId}
          onCancel={this.props.closePostComments}
        />
        <Posts
          isLoading={this.props.status.loading}
          posts={this.props.posts}
          likePost={this.props.likePost}
          dislikePost={this.props.dislikePost}
          openPostComments={this.props.openPostComments}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  status: state.status.posts,
	comments: state.comments,
  profile: state.profile,
});

const mapDispatchToProps = {
  fetchPosts,
  addPost,
  likePost,
	dislikePost,
	openPostComments,
	closePostComments
};

export default connect(mapStateToProps, mapDispatchToProps)(Feeds);
