import * as ActionTypes from "../../constants/actionTypes";

export const getArticle = (data: any) => {
  return {
    type: ActionTypes.Article.GET_ARTICLE,
    payload: data,
  };
};
