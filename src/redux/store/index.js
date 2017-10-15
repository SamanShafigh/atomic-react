import { createStore, compse } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from '../reducers/index';

import network from '../../fixtures/network';
import profile from '../../fixtures/profile';
import posts from '../../fixtures/posts';

// create an object for the default data
const initState = {
  profile,
  network,
  posts
};

const store = createStore(rootReducer, initState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
