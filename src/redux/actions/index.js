export const SET_LIKE = "SET_LIKE";
export const SET_SEARCH = "SET_SEARCH";
export const SET_PLAYER = "SET_PLAYER";
export const SET_TRACK = "SET_TRACK";

export const setLike = (likeList) => {
	return {
		type: SET_LIKE,
		payload: likeList,
	};
};

export const search = (query) => {
	return async (dispatch) => {
		try {
			let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query, {
				method: "GET",
				headers: {
					"X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
					"X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
				},
			});
			if (response.ok) {
				let result = await response.json();
				console.log(result.data);
				dispatch({
					type: SET_SEARCH,
					payload: result.data,
				});
			} else {
				throw new Error("error in search");
			}
		} catch (err) {
			console.log("error", err);
		}
	};
};

export const setPlayer = (album) => {
	return {
		type: SET_PLAYER,
		payload: album,
	};
};

export const getTrack = (query) => {
	return async (dispatch) => {
		try {
			let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query, {
				method: "GET",
				headers: {
					"X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
					"X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
				},
			});
			if (response.ok) {
				let result = await response.json();
				console.log(result.data);
				dispatch({
					type: SET_TRACK,
					payload: result.data,
				});
			} else {
				throw new Error("error in search");
			}
		} catch (err) {
			console.log("error", err);
		}
	};
};
