import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// Redux Thunk middleware allows you to write action creators that return a function instead of an action
import thunk from 'redux-thunk';

// import the root reducer
import rootReducer from '../reducers/index';
// import initial state of the app
import state from './state';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Compose a store creator with some middlewares
const createStoreWithMiddleware = composeEnhancers(applyMiddleware(thunk))(createStore);

// Create a store
const store = createStoreWithMiddleware(rootReducer, state);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
