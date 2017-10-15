import Actions from '../../lib/constants/Actions';

// Add new post
export function addPost(user, summary) {
  return {
    type: Actions.POST_ADD_POST,
    user,
    summary
  }
}

// Like a post
export function likePost(postId) {
  return {
    type: Actions.POST_LIKE_POST,
    postId,
  }
}
