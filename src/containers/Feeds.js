import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions/posts'

import Posts from '../components/Post/Posts';
import WritePost from '../components/Post/WritePost';

class Feeds extends React.Component {
  render() {
    return (
      <div>
        <WritePost />
        <Posts posts={this.props.posts} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = {
  fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Feeds);
