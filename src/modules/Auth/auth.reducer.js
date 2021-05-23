import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { put, takeLatest, select } from "redux-saga/effects";
import { getUserById } from "./auth.crud";
import { actionTypes } from "./auth.constants";

const initialAuthState = {
    authToken: "",
    user:null,
    id: 3
};
export const Authreducer = persistReducer(
    { storage, key: "autolibdz-auth", whitelist: ["authToken"] },
    (state = initialAuthState, action) => {
        switch (action.type) {
            case actionTypes.Login: {
                const { authToken, id } = action.payload;
                return { authToken, id };
            }
            case actionTypes.Logout: {
                return initialAuthState;
            }
            case actionTypes.UserLoaded: {
                const { user } = action.payload;
                return { ...state, user };
            }
            default:
                return state;
        }
    }
);

export const actions = {
    login: (data) => ({ type: actionTypes.Login, payload: { authToken: data.token, id: data.id } }),
    logout: () => ({ type: actionTypes.Logout }),
    requestUser: (user) => ({
        type: actionTypes.UserRequested,
        payload: { user },
      }),
    fulfillUser: (user) => ({ type: actionTypes.UserLoaded, payload: { user } }),
};

export function* saga() {
    yield takeLatest(actionTypes.Login, function* loginSaga() {
        yield put(actions.requestUser());
    });
    yield takeLatest(actionTypes.UserRequested, function* userRequested() {
        const id = yield select(({ auth }) => auth.id)
        const { data: user } = yield getUserById(id);
        yield put(actions.fulfillUser(user));
    });
}