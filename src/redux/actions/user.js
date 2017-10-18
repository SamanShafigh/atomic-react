import Actions from '../../lib/constants/Actions';
import mockUser from '../../fixtures/user';

// user is fetched
export function userFetched(user) {
  return {
    type: Actions.USER_USER_FETCHED,
    user
  }
}

// fetch user
export function fetchUser(userId) {
  return (dispatch) => {
    dispatch({
      type: Actions.USER_FETCH_USER,
      userId
    });

    setTimeout(() => {
      userFetched(mockUser)
    }, 500);
  };
}
