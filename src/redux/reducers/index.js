import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user';
import posts from './posts';
import profile from './profile';
import network from './network';

const rootReducer = combineReducers({
  user,
  posts,
  profile,
  network,
  routing: routerReducer
});

export default rootReducer;
