import { combineReducers, configureStore } from "@reduxjs/toolkit";
import likeReducer from "../reducers/likeReducer";
import playerReducer from "../reducers/playerReducer";
import searchReducer from "../reducers/searchReducer";
import trackReducer from "../reducers/trackReducer";

const bigReducer = combineReducers({
	like: likeReducer,
	player: playerReducer,
	search: searchReducer,
	track: trackReducer,
});

const store = configureStore({
	reducer: bigReducer,
});

export default store;
