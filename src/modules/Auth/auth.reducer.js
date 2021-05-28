import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { put, takeLatest, select } from "redux-saga/effects";
import { getUserById, getIdByToken } from "./auth.crud";
import { actionTypes } from "./auth.constants";

const initialAuthState = {
    authToken: "",
    user:null,
};
export const Authreducer = persistReducer(
    { storage, key: "autolibdz-auth", whitelist: ["authToken"] },
    (state = initialAuthState, action) => {
        switch (action.type) {
            case actionTypes.Login: {
                const { authToken } = action.payload;
                return { authToken };
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
    login: (data) => ({ type: actionTypes.Login, payload: { authToken: data.token } }),
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
        try {
            const token = yield select(({ auth }) => auth.authToken)
            const {data: {
                user: {id}
            }} = yield getIdByToken(token);
            
            const { data: user } = yield getUserById(id);

            if (user === "" || user === undefined)
                throw new Error("invalid user id");
            yield put(actions.fulfillUser(user));

        } catch (e) {
            yield put(actions.logout())
        }
        
    });
}