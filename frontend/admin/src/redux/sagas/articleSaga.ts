import { takeEvery, put, call } from "redux-saga/effects";
import * as ActionTypes from "@constants/actionTypes";
import { API } from "@config/axios";

export function* getArticle(action: any) {}

export function* articleWatcher() {
  yield takeEvery(ActionTypes.Article.GET_ARTICLE, getArticle);
}
