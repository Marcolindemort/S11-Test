import { SET_PLAYER } from "../actions";

const initialState = {
	track: null,
};

const playerReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PLAYER:
			return { ...state, track: action.payload };
		default:
			return state;
	}
};

export default playerReducer;
