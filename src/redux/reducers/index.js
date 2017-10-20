import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user';
import news from './news';
import status from './status';
import posts from './posts';
import profile from './profile';
import network from './network';

const rootReducer = combineReducers({
  user,
  news,
  status,
  posts,
  profile,
  network,
  routing: routerReducer
});

export default rootReducer;
