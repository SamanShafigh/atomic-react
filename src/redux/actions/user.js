import Actions from "../../lib/constants/Actions";
import { asyncFetchUser } from "../../apis/UserApi";

// user is fetched
export function userFetched(user) {
  return {
    type: Actions.USER_USER_FETCHED,
    user
  };
}

export function closeUserModal() {
  return {
    type: Actions.USER_CLOSE_USER_MODAL
  };
}

// async action to fetch user
export function fetchUser(userId) {
  return dispatch => {
    dispatch({
      type: Actions.USER_FETCH_USER,
      userId
    });

    asyncFetchUser(userId, user => dispatch(userFetched(user)));
  };
}
