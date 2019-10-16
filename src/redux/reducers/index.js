import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import user from "./user";
import news from "./news";
import status from "./status";
import posts from "./posts";
import profile from "./profile";
import network from "./network";
import comments from "./comments";

const rootReducer = combineReducers({
  user,
  news,
  status,
  posts,
  profile,
  network,
  comments,
  routing: routerReducer
});

export default rootReducer;
