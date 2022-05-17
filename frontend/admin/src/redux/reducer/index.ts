import { combineReducers } from "redux";
import articleReducer from "./articleReducer";

const appReducer = combineReducers({
  weather: articleReducer,
});

const rootReducer = (state : any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
