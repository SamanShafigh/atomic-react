import React from 'react';
import './style.css';

import Textarea from '../../share/atoms/Textarea';
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
      <Panel title="Share an article, photo, video or idea" icon="ic_subject">
        <form onSubmit={this.onSubmit}>
          <div className="write-post-input">
            <Textarea onChange={this.onChange} size="large" value={this.state.summary} />
          </div>
          <div className="write-post-button">
            <Button size="large">Post</Button>
          </div>
        </form>
      </Panel>
    )
  }
}

export default WritePost;
