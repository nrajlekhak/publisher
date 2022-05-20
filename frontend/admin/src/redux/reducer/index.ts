import { combineReducers } from 'redux';

import articleReducer from '@redux/reducer/articleReducer';
import * as ActionTypes from '@constants/actionTypes';
import authReducer from '@redux/reducer/authReducer';

const appReducer = combineReducers({
  article: articleReducer,
  auth: authReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === ActionTypes.LOGOUT) {
    localStorage.removeItem('token');
    localStorage.removeItem('isAuthenticated');
    return appReducer(undefined, { type: undefined });
  }

  return appReducer(state, action);
};

export default rootReducer;
