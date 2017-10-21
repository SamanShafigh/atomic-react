import Actions from '../../lib/constants/Actions';
import {
  asyncAddPost,
  asyncFetchPost,
	asyncDislikePost,
	asyncFetchPostComments
} from '../../apis/PostApi';

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

// Open post comment modal
export function openPostComments(postId) {
	return (dispatch) => {
		dispatch({
			type: Actions.POST_OPEN_POST_COMMENTS,
			postId,
		});

		asyncFetchPostComments(postId, (err, data) => {
			dispatch(postCommentsFetched(data))
		})
	}
}

export function closePostComments() {
	return {
		type: Actions.POST_CLOSE_POST_COMMENTS
	}
}

export function postCommentsFetched(data) {
	return {
		type: Actions.POST_COMMENTS_FETCHED,
		data,
	}
}

// Like a post
export function likePost(postId) {
  return {
    type: Actions.POST_LIKE_POST,
    postId,
  };
}

// Try to dislike a post
export function dislikePost(postId) {
	return (dispatch) => {
		dispatch({
			type: Actions.POST_DISLIKE_POST,
			postId,
		});

		asyncDislikePost(postId, (err, data) => {
			if (err) {
				return dispatch(postDislikedFailed(postId));
			}
			dispatch(postDisliked(postId));
		});
	}
}

// Post get disliked
export function postDisliked(postId) {
	return {
		type: Actions.POST_POST_DISLIKED,
		postId,
	}
}

// Post dislike get failed
export function postDislikedFailed(postId) {
	return {
		type: Actions.POST_POST_DISLIKED_FAILED,
		postId,
	}
}

// Like a post
export function postFetched(data) {
  return {
    type: Actions.POST_POSTS_FETCHED,
    data,
  }
}

// fetch posts
export function fetchPosts() {
  return (dispatch) => {

    // Then we post it and if things goes well then we need
    // to fix the temporary id of post
    asyncFetchPost(
      (data) => dispatch(postFetched(data))
    );
  };
}
