import { combineReducers } from 'redux';
import auth from './authReducer';
import complaints from './complaintsReducer';

export default combineReducers({ auth, complaints });