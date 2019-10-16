import React from "react";
import PropTypes from "prop-types";
import { getPostStyle, getPostFooterStyle } from "./style.js";

import Grid from "../../atoms/Grid";
import Cell from "../../atoms/Cell";
import ProfileInfo from "../../molecules/ProfileInfo";
import Icon from "../../atoms/Icon";
import Divider from "../../atoms/Divider";
import Loading from "../../atoms/Loading";

const Post = ({ post, likePost, dislikePost, openPostComments }) => (
  <div>
    {/* I think this is not good, we are rendering PostComments part for each post */}
    {/*<PostComments comments={post.comments} isVisible={post.isCommenting} />*/}
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
        <Loading isLoading={post.isPosting} />
        <span className={getPostStyle()}>{post.summary}</span>
      </Cell>
    </Grid>
    <Grid>
      <Cell>
        <span className={getPostFooterStyle()}>{post.likes} Likes</span>
        <span className={getPostFooterStyle()}>{post.dislike} Dislike</span>
      </Cell>
    </Grid>
    <Grid>
      <Cell size="1">
        <a onClick={() => likePost(post.id)}>
          <Icon name="ic_thumb_up">Like</Icon>
        </a>
        <a onClick={() => dislikePost(post.id)}>
          <Icon name="ic_thumb_down">Dislike</Icon>
        </a>
        <a onClick={() => openPostComments(post.id)}>
          <Icon name="ic_comment">Comment</Icon>
        </a>
      </Cell>
    </Grid>
    <Grid>
      <Cell>
        <Divider />
      </Cell>
    </Grid>
  </div>
);

Post.propTypes = {
  likePost: PropTypes.func,
  dislikePost: PropTypes.func,
  openPostComments: PropTypes.func,
  post: PropTypes.shape({
    id: PropTypes.number,
    summary: PropTypes.string,
    img: PropTypes.string,
    likes: PropTypes.number,
    dislike: PropTypes.number,
    user: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      email: PropTypes.string,
      img: PropTypes.string
    }),
    isPosting: PropTypes.bool
  })
};

Post.defaultProps = {
  isPosting: false
};

export default Post;
