import { combineReducers } from 'redux';

import articleReducer from '@redux/reducer/articleReducer';
import * as ActionTypes from '@constants/actionTypes';
import authReducer from '@redux/reducer/authReducer';

const appReducer = combineReducers({
  article: articleReducer,
  auth: authReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
