import Actions from "../../lib/constants/Actions";

function news(state = [], action) {
  switch (action.type) {
    case Actions.NEWS_DATA_FETCHED:
      return Object.assign({}, state, {
        data: action.data,
        loaded: true
      });

    default:
      return state;
  }
}

export default news;
