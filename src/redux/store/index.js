import { createStore } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from '../reducers/index';
// import initial state of the app
import state from './state';

const store = createStore(rootReducer, state);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
