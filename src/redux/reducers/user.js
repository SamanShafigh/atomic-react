import Actions from '../../lib/constants/Actions';

function user(state = {}, action) {
  console.log(action.type);
  switch(action.type) {
    /**
     * Try to fetch a user
     */
    case Actions.USER_FETCH_USER :
      return Object.assign({}, state, {
        loading: true,
        loaded: false,
      });

    /**
     * Close a user modal
     */
    case Actions.USER_CLOSE_USER_MODAL :
      return Object.assign({}, state, {
        loading: false,
        loaded: false,
        data: {}
      });

    /**
     * User is fetched
     */
    case Actions.USER_USER_FETCHED :
      const user = action.user;
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        data: user
      });

    default:
      return state;
  }
}

export default user;
