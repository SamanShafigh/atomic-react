import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions/posts'

import Panel from '../share/molecules/Panel';
import Posts from '../components/Post/Posts';

class Feeds extends React.Component {
  render() {
    return (
      <Panel title="Experience">
        <Posts posts={this.props.posts} />
      </Panel>
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
