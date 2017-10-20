import Actions from '../../lib/constants/Actions';

function status(state = {}, action) {
  switch(action.type) {
    case Actions.POST_POSTS_FETCHED:
      return Object.assign({}, state, {
        posts: {
          loading: false,
          loaded: true,
        }
      });

    default:
      return state;
  }
}

export default status;
