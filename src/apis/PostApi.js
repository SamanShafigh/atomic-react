import axios from 'axios';
import data from '../fixtures/posts';

/**
 * Mock api
 */
export const asyncAddPost = (tempId, user, summary, callBack) => {
  setTimeout(() => {
    callBack(tempId);
  }, 1000);
}

/**
 * Mock api
 */
export const asyncFetchPost = (callBack) => {
  setTimeout(() => {
    callBack(data);
  }, 1000);
}