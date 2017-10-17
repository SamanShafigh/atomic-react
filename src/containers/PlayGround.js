import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions/posts'
import container from '../Container';
import Grid from '../share/atoms/Grid';
import Cell from '../share/atoms/Cell';
import Panel from '../share/molecules/Panel';
import Post from '../share/organisms/Post';

class PlayGround extends React.Component {
  render() {
    return (
      <div>
        This is home page

        {['A', 'B', 'C'].map((componentId) => {
          let Component = container.get(componentId);
          return <Component>{componentId}</Component>;
        })}

        <Panel title="Experience">
          {this.props.posts.map((post) => (
            <Post post={post} />
          ))}
        </Panel>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  posts: state.posts,
});

const mapDispatchToProps = {
  fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayGround);
