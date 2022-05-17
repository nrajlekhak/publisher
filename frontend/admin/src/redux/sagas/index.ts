import { all } from "redux-saga/effects";
import { articleWatcher } from "./articleSaga";

export default function* rootSaga() {
  yield all([articleWatcher()]);
}
