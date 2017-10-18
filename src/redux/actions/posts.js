import Actions from '../../lib/constants/Actions';
import { asyncAddPost } from '../../apis/PostApi';

// async action to fetch user
export function addPost(user, summary) {
  return (dispatch) => {
    const tempId = Date.now();

    // We add it immediately to state
    dispatch({
      type: Actions.POST_ADD_POST,
      id: tempId,
      user,
      summary
    });

    // Then we post it and if things goes well then we need
    // to fix the temporary id of post
    asyncAddPost(
      tempId,
      user,
      summary,
      (tempId) => dispatch(postAdded(tempId))
    );
  };
}

// Like a post
export function postAdded(tempId) {
  return {
    type: Actions.POST_POST_ADDED,
    tempId,
  }
}

// Like a post
export function likePost(postId) {
  return {
    type: Actions.POST_LIKE_POST,
    postId,
  }
}

// fetch posts
export function fetchPosts() {
  return {
    type: Actions.POST_FETCH_POSTS,
  }
}
