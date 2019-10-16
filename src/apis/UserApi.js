import users from "../fixtures/network";

/**
 * Mock api
 */
export const asyncFetchUser = (userId, callBack) => {
  setTimeout(() => {
    callBack(helperFindUser(userId));
  }, 500);
};

/**
 *
 * @param userId
 * @returns {*}
 */
function helperFindUser(userId) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === userId) {
      return users[i];
    }
  }

  return null;
}
