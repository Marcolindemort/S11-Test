import { SET_SEARCH } from "../actions";

const initialState = {
	searchQuery: [],
};

const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SEARCH:
			return {
				...state,
				searchQuery: action.payload,
			};
		default:
			return state;
	}
};

export default searchReducer;
