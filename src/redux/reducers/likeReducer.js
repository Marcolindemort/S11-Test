import { SET_LIKE } from "../actions";

const initialState = {
	likeList: [],
};

const likeReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LIKE:
			return {
				...state,
				likeList: [...state.likeList, action.payload],
			};
		default:
			return state;
	}
};

export default likeReducer;
