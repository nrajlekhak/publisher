import { combineReducers } from 'redux';
import articleReducer from '@redux/reducer/articleReducer';
import * as ActionTypes from '@constants/actionTypes';

const appReducer = combineReducers({
  article: articleReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === ActionTypes.LOGOUT) {
    return appReducer(undefined, { type: undefined });
  }

  return appReducer(state, action);
};

export default rootReducer;
