import { all } from "redux-saga/effects";
import { articleWatcher } from "@redux/sagas/articleSaga";

export default function* rootSaga() {
  yield all([articleWatcher()]);
}
