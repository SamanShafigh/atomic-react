import React from 'react';
import PropTypes from 'prop-types';
import { getStyle, getPostStyle } from './style.js';

import Grid from '../../atoms/Grid';
import Cell from '../../atoms/Cell';
import ProfileImage from '../../molecules/ProfileImage';

const Post = ({post}) => (
  <div className={getStyle()}>
    <Grid>
      <Cell>
        <ProfileImage url={post.user.img} size="small" />
      </Cell>
    </Grid>
    <Grid>
      <Cell className={getPostStyle()}>
        {post.summary}
      </Cell>
    </Grid>
  </div>
);

Post.propTypes = {
  id: PropTypes.number,
  summary: PropTypes.string,
  img: PropTypes.string,
  likes: PropTypes.number,
  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    img: PropTypes.string,
  }),
}

export default Post;
