import posts from "../fixtures/posts";
import comments from "../fixtures/comments";

/**
 * Mock api
 */
export const asyncAddPost = (tempId, user, summary, callBack) => {
  setTimeout(() => {
    callBack(tempId);
  }, 1000);
};

/**
 * Mock api
 */
export const asyncFetchPostComments = (postId, callBack) => {
  setTimeout(() => {
    callBack(null, comments);
  }, 100);
};

/**
 * Mock api
 */
export const asyncFetchPost = callBack => {
  setTimeout(() => {
    callBack(posts);
  }, 200);
};

/**
 * Mock api
 */
export const asyncDislikePost = (postId, callBack) => {
  setTimeout(() => {
    callBack(null, postId);
  }, 100);
};
