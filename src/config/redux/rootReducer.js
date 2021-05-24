import { all } from "redux-saga/effects";
import { combineReducers } from "redux";
import { Authreducer, Slidereducer, saga } from "../../modules";

export const rootReducer = combineReducers({
  auth: Authreducer,
  slide: Slidereducer
});

export function* rootSaga() {
  yield all([saga()]);
}
