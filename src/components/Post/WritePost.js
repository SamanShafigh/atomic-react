import React from 'react';
import './style.css';

import Input from '../../share/atoms/Input';
import Button from '../../share/atoms/Button';
import Panel from '../../share/molecules/Panel';

const WritePost = () => (
  <Panel title="Share an article, photo, video or idea">
    <span className="write-post-input">
      <Input size="large" value="Some comment your are typing" />
    </span>
    <span className="write-post-button">
      <Button size="large">Post</Button>
    </span>
  </Panel>
);

WritePost.propTypes = {
}

export default WritePost;
