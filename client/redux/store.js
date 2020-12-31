import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

// TODO Understand wtf this does sometime
//rootReducer refers to the combineReducer 
export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); 
  //applyMiddleware => to 
  //using thunk => dispatch an argument to make a synchronous call after all the asychronouse operations
    //have completed
