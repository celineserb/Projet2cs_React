import { all } from "redux-saga/effects";
import { combineReducers } from "redux";
<<<<<<< HEAD
import { Authreducer, saga } from "../../modules";

export const rootReducer = combineReducers({
  auth: Authreducer
});
=======

import { Authreducer, saga, trackingSlice, Slidereducer } from "../../modules";

export const rootReducer = combineReducers({
  auth: Authreducer, 
  rentalInfo: trackingSlice,
  slide: Slidereducer
})
>>>>>>> 29399402f9cabe37454440b81627148b441f7e3e

export function* rootSaga() {
  yield all([saga()]);
}
