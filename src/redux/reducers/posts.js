import Actions from '../../lib/constants/Actions';

function posts(state = [], action) {
  switch(action.type) {
    case Actions.POST_ADD_POST :
      return state;
    default:
      return state;
  }
}

export default posts;
