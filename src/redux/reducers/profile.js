import Actions from '../../lib/constants/Actions';

function profile(state = {}, action) {
  switch(action.type) {
    case Actions.PROFILE_FETCH_USER :
      return state;
    default:
      return state;
  }
}

export default profile;
