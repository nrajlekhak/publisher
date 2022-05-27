import { takeEvery, put, call } from 'redux-saga/effects';
import * as ActionTypes from '@constants/actionTypes';
import { API } from '@config/axios';
import { Article } from '../../@types/Article';

export function* getArticles() {
  try {
    const articles: Article[] = yield call(getArticlesService);
    yield put({ type: ActionTypes.Publisher.SET_ARTICLES, payload: articles });
  } catch (err) {}
}

async function getArticlesService() {
  const res = await API.get('/');
  return res.data;
}

export function* publisherWatcher() {
  yield takeEvery(ActionTypes.Publisher.GET_ARTICLES, getArticles);
}
