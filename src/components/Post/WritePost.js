import React from 'react';
import './style.css';

import Input from '../../share/atoms/Input';
import Button from '../../share/atoms/Button';
import Panel from '../../share/molecules/Panel';

class WritePost extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      summary: '',
    };
  }

  onChange = (e) => {
    this.setState({
      summary: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const summary = this.state.summary;
    this.setState({ summary: '' });
    this.props.addPost(this.props.user, summary);
  }

  render() {
    return (
      <Panel title="Share an article, photo, video or idea">
        <form onSubmit={this.onSubmit}>
          <span className="write-post-input">
            <Input onChange={this.onChange} size="large" value={this.state.summary} />
          </span>
            <span className="write-post-button">
            <Button size="large">Post</Button>
          </span>
        </form>
      </Panel>
    )
  }
}

export default WritePost;
