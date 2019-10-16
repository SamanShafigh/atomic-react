import Actions from "../../lib/constants/Actions";

function network(state = [], action) {
  switch (action.type) {
    case Actions.NETWORK_FETCH_USERS:
      return state;
    default:
      return state;
  }
}

export default network;
