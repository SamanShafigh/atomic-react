import Actions from "../../lib/constants/Actions";

function status(state = {}, action) {
  switch (action.type) {
    case Actions.POST_OPEN_POST_COMMENTS:
      return Object.assign({}, state, {
        posts: {
          postId: action.postId,
          commenting: true
        }
      });

    case Actions.POST_CLOSE_POST_COMMENTS:
      return Object.assign({}, state, {
        posts: {
          postId: null,
          commenting: false
        }
      });

    case Actions.POST_POSTS_FETCHED:
      return Object.assign({}, state, {
        posts: {
          loading: false,
          loaded: true
        }
      });

    default:
      return state;
  }
}

export default status;
