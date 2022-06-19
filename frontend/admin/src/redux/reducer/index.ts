import { combineReducers } from 'redux';

import articleReducer from '@redux/reducer/articleReducer';
import authReducer from '@redux/reducer/authReducer';
import publisherReducer from './publisherReducer';

const appReducer = combineReducers({
  article: articleReducer,
  auth: authReducer,
  publisher: publisherReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
