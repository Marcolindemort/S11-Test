import React from "react";
import shuffle from "../assets/shuffle.png";
import prev from "../assets/prev.png";
import play from "../assets/play.png";
import next from "../assets/next.png";
import repeat from "../assets/repeat.png";
import { useDispatch, useSelector } from "react-redux";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { setLike } from "../redux/actions";

const Player = () => {
	const player = useSelector((state) => state.player.track);
	const dispatch = useDispatch();

	return (
		<div className="container-fluid fixed-bottom bg-container pt-1">
			<div className="row h-100">
				<div className="col-lg-10 offset-lg-2">
					<div className="row h-100 align-items-center" style={{ justifyContent: player ? "" : "center" }}>
						<Col
							xs={4}
							className=" align-items-center justify-content-center"
							style={{ display: player ? "flex" : "none" }}>
							<img src={player?.album.cover_medium} alt="copertina album" style={{ width: "80px", height: "80px" }} />
							<FontAwesomeIcon
								icon={faHeart}
								style={{ cursor: "pointer" }}
								onClick={() => dispatch(setLike(player.title))}
							/>
						</Col>

						<div className="col-6 col-md-4 playerControls">
							<div className="d-flex">
								<a href="/">
									<img src={shuffle} alt="shuffle" />
								</a>
								<a href="/">
									<img src={prev} alt="prev" />
								</a>
								<a href="/">
									<img src={play} alt="play" />
								</a>
								<a href="/">
									<img src={next} alt="next" />
								</a>
								<a href="/">
									<img src={repeat} alt="repeat" />
								</a>
							</div>
							<div className="progress mt-3">
								<div role="progressbar"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Player;
