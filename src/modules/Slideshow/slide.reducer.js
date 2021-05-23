import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialSlideState = {
    sidebarShow: "responsive"
}

export const Slidereducer = persistReducer(
    { storage, key: "autolibdz-slide", whitelist: ["authToken"] },
    (state = initialSlideState, action) => {
        switch (action.type) {
            case 'set': {
                const sidebarShow = action.sidebarShow;
                return { sidebarShow };
            }
            default:
                return state;
        }
    }
);