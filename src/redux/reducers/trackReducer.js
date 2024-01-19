import { SET_TRACK } from "../actions";

const initialState = {
	results: [],
};

const trackReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_TRACK:
			return {
				...state,
				results: action.payload,
			};
		default:
			return state;
	}
};

export default trackReducer;
