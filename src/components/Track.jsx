import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrack, setPlayer } from "../redux/actions";

const Track = ({ artist }) => {
	const tracks = useSelector((state) => state.track.results);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTrack(artist));
	}, []);

	return (
		<>
			{tracks
				.filter((param, index) => index < 4)
				.map((track) => (
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
				))}
		</>
	);
};

export default Track;

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
