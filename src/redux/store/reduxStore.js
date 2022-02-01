import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reduxReducer from '../reducer/reduxReducer.js';

const reduxStore = createStore(
    reduxReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default reduxStore
