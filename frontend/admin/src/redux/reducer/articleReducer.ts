import * as ActionTypes from "@constants/actionTypes";

const initialState = {
  articleData: {},
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.Article.GET_ARTICLE: {
      return {
        ...state,
        weatherData: action.payload,
      };
    }

    default:
      return state;
  }
};
