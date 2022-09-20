/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import podcatsReducer from './podcatsRedux/reducer';

const rootReducer = combineReducers({
  podcats: podcatsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
