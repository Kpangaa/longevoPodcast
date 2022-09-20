/* eslint-disable prettier/prettier */
import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './modules/combineReducers';

export default createStore(rootReducer, applyMiddleware(thunk));
