import axios from 'axios';

/**
 * Mock api
 */
export const asyncAddPost = (tempId, user, summary, callBack) => {
  setTimeout(() => {
    callBack(tempId);
  }, 1000);
}