import * as ActionTypes from '@constants/actionTypes';

const initialState = {
  articles: [],
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.Article.SET_ARTICLE: {
      return {
        ...state,
        articles: action.payload,
      };
    }

    default:
      return state;
  }
};
