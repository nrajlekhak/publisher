import { takeEvery, put, call } from 'redux-saga/effects';
import * as ActionTypes from '@constants/actionTypes';
import { API } from '@config/axios';
import { Article } from '../../@types/Article';

export function* getArticle(action: any) {}

export function* createArticle(action: { type: string; payload: Article }) {
  try {
    const articles: Article[] = yield call(
      createArticleService,
      action.payload
    );
    yield put({ type: ActionTypes.Article.GET_ARTICLE, articles });
  } catch (e) {}
}

async function createArticleService(data: Article) {
  const res = await API.post('/article/create', data);
  return res.data;
}

export function* articleWatcher() {
  yield takeEvery(ActionTypes.Article.GET_ARTICLE, getArticle);
  yield takeEvery(ActionTypes.Article.CREATE_ARTICLE, createArticle);
}
