import Actions from '../../lib/constants/Actions';

// Like a post
export function likeProfile(postId) {
  return {
    type: Actions.POST_LIKE_POST,
    postId,
  }
}

// fetch posts
export function fetchProfile() {
  return {
    type: Actions.POST_FETCH_POSTS,
  }
}
