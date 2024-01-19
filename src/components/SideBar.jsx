import React from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faHouse } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../redux/actions";

const SideBar = () => {
	const searchQuery = useSelector((state) => state.search.searchQuery);
	const dispatch = useDispatch();

	const handleSearch = (event) => {
		event.preventDefault();
		const inputValue = event.target.elements.searchField.value;
		dispatch(search(inputValue));
	};

	return (
		<div className="col col-2">
			<nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
				<div className="container flex-column align-items-start">
					<a className="navbar-brand" href="index.html">
						<img src={logo} alt="Spotify Logo" width="131" height="40" />
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<ul>
								<li>
									<a className="nav-item nav-link d-flex align-items-center" href="/">
										<FontAwesomeIcon icon={faHouse} size="lg" />
										&nbsp; Home
									</a>
								</li>
								<li>
									<a className="nav-item nav-link d-flex align-items-center" href="/">
										<FontAwesomeIcon icon={faBookOpen} size="lg" />
										&nbsp; Your Library
									</a>
								</li>
								<li>
									<form className="input-group mt-3" onSubmit={handleSearch}>
										<input
											type="text"
											className="form-control"
											id="searchField"
											placeholder="Search"
											aria-label="Search"
											aria-describedby="basic-addon2"
											onChange={(event) => dispatch(search(event.target.value))}
										/>
										<div className="input-group-append">
											<button className="btn btn-outline-secondary btn-sm h-100" type="submit">
												GO
											</button>
										</div>
									</form>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="nav-btn">
					<button className="btn signup-btn" type="button">
						Sign Up
					</button>
					<button className="btn login-btn" type="button">
						Login
					</button>
					<div>
						<a href="/">Cookie Policy</a> | <a href="/">Privacy</a>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default SideBar;
