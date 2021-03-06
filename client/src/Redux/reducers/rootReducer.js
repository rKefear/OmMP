import { combineReducers } from "redux";
import { allUserReducer } from "./allUserReducer";
import createUserReducer from "./createUserReducer";
import { errorReducer } from "./errorReducer";
import { friendReducer } from "./friendReducer";
import loaderReducer from "./loaderReducer";
import { roomReducer } from "./roomReducer";
import searchReducer from "./searchReducer";
import { userRoomReducer } from "./userRoomReducer";


export const rootReducer = combineReducers({
    rooms: roomReducer,
    myFriend: friendReducer,
    userRoom: userRoomReducer,
    user: createUserReducer,
    loader: loaderReducer,
    search: searchReducer,
    allUser : allUserReducer,
    error: errorReducer
})
