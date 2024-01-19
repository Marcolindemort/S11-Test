import { useDispatch, useSelector } from "react-redux";
import { setPlayer } from "../redux/actions";

const SearchResults = () => {
	const results = useSelector((state) => state.search.searchQuery);
	const dispatch = useDispatch();

	return results.map((track) => (
		<div class="col text-center" id={track.id}>
			<img
				class="img-fluid"
				src={track.album.cover_medium}
				alt="track"
				style={{ cursor: "pointer" }}
				onClick={() => dispatch(setPlayer(track))}
			/>
			<p>
				Track: {track.title.length < 16 ? `${track.title}` : `${track.title.substring(0, 16)}...`}
				<br />
				Artist: {track.artist.name}
			</p>
		</div>
	));
};

export default SearchResults;

/* `
<div class="col text-center" id=${songInfo.id}>
    <img class="img-fluid" src=${
      songInfo.album.cover_medium
    } alt="track" />
  <p>
      Track: "${
        songInfo.title.length < 16
          ? `${songInfo.title}`
          : `${songInfo.title.substring(0, 16)}...`
      }"<br>
      Artist: ${songInfo.artist.name}
  </p>
</div>` */
