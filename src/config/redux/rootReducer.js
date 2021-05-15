import { all } from "redux-saga/effects";
import { combineReducers } from "redux";
import { Authreducer, saga, trackingSlice } from "../../modules";

export const rootReducer = combineReducers({
  auth: Authreducer, 
  rentalInfo: trackingSlice
});

export function* rootSaga() {
  yield all([saga()]);
}
