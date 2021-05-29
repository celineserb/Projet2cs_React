import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

import { Authreducer, saga, trackingSlice, Slidereducer } from "../../modules";

export const rootReducer = combineReducers({
  auth: Authreducer, 
  rentalInfo: trackingSlice,
  slide: Slidereducer
})

export function* rootSaga() {
  yield all([saga()]);
}
