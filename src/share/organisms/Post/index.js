import React from 'react';
import PropTypes from 'prop-types';
import { getPostStyle, getPostFooterStyle } from './style.js';

import Grid from '../../atoms/Grid';
import Cell from '../../atoms/Cell';
import ProfileInfo from '../../molecules/SmallProfileInfo';
import Icon from '../../atoms/Icon';

const Post = ({post}) => (
  <div>
    <Grid>
      <Cell>
        <ProfileInfo
          name={post.user.name}
          img={post.user.img}
          email={post.user.email}
        />
      </Cell>
    </Grid>
    <Grid>
      <Cell>
        <span className={getPostStyle()}>{post.summary}</span>
      </Cell>
    </Grid>
    <Grid>
      <Cell>
        <span className={getPostFooterStyle()}>{post.likes} Likes</span>
      </Cell>
    </Grid>
    <Grid>
      <Cell size="1">
        <Icon name="ic_thumb_up">Like</Icon>
        <Icon name="ic_comment">Comment</Icon>
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
