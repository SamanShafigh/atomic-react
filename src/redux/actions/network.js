import Actions from '../../lib/constants/Actions';

// fetch users
export function fetchNetworkUsers() {
  return {
    type: Actions.NETWORK_FETCH_USERS,
  }
}

export function fetchNetworkUser(userId) {
  return {
    type: Actions.NETWORK_FETCH_USER,
    userId
  }
}

export function addNetworkUser(user) {
  return {
    type: Actions.NETWORK_ADD_USER,
    user
  }
}

export function sendConnectNetworkUser(fromUser, toUser) {
  return {
    type: Actions.NETWORK_SEND_CONNECT_REQUEST_USER,
    fromUser,
    toUser
  }
}
