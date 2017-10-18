import Actions from '../../lib/constants/Actions';

function user(state = {}, action) {
  switch(action.type) {
    /**
     * Try to fetch a user
     */
    case Actions.USER_FETCH_USER :
      return Object.assign(state, {loading: true});

    /**
     * User is fetched
     */
    case Actions.USER_USER_FETCHED :
      const user = action.user;
      return Object.assign(state, {
        loading: false,
        user: user
      });

    default:
      return state;
  }
}

export default user;
