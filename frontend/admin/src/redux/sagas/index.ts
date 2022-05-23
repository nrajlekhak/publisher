import { all } from 'redux-saga/effects';
import { articleWatcher } from '@redux/sagas/articleSaga';
import { loginWatcher } from '@redux/sagas/loginSaga';

export default function* rootSaga() {
  yield all([articleWatcher(), loginWatcher()]);
}
