import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

// TODO Understand wtf this does sometime
export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); 
