import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import profile from './profile';

const rootReducer = combineReducers({
  posts,
  profile,
  routing: routerReducer
});

export default rootReducer;
