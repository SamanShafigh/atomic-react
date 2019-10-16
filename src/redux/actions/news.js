import Actions from "../../lib/constants/Actions";
import { asyncFetchNews } from "../../apis/NewsApi";

// async action to fetch user
export function fetchNews() {
  return dispatch => {
    dispatch({
      type: Actions.NEWS_FETCH_DATA
    });

    asyncFetchNews(data => dispatch(newsFetched(data)));
  };
}

// fetch news
export function newsFetched(data) {
  return {
    type: Actions.NEWS_DATA_FETCHED,
    data
  };
}
