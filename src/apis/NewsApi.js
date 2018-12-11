import { data } from '../fixtures/news';

/**
 * Mock api
 */
export const asyncFetchNews = (callBack) => {
  setTimeout(() => {
    callBack(data);
  }, 1000);
}