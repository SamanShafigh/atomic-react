import React from "react";
import "./style.css";

import Textarea from "../../share/atoms/Textarea";
import Button from "../../share/atoms/Button";
import Modal from "../../share/molecules/Modal";
import PostComment from "../../share/organisms/PostComment";

class CommentsModal extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      summary: ""
    };
  }

  onChange = e => {
    this.setState({
      summary: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const summary = this.state.summary;
    this.setState({ summary: "" });
    this.props.addComment(this.props.postId, summary);
  };

  render() {
    return (
      <Modal
        onCancel={this.props.onCancel}
        isVisible={this.props.isVisible}
        title="Share an article, photo, video or idea"
        icon="ic_subject"
      >
        <form onSubmit={this.onSubmit}>
          <div className="write-post-input">
            <Textarea
              onChange={this.onChange}
              size="large"
              value={this.state.summary}
            />
          </div>
          <div className="write-post-button">
            <Button size="large">Post</Button>
          </div>
        </form>
        {this.props.comments.map(comment => (
          <PostComment comment={comment} />
        ))}
      </Modal>
    );
  }
}

export default CommentsModal;
