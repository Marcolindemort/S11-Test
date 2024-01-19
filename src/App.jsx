import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import SideBar from "./components/SideBar";
import HomePage from "./components/HomePage";
import Player from "./components/Player";

function App() {
	return (
		<div className="App">
			<Container fluid>
				<Row>
					<SideBar />
					<HomePage />
				</Row>
				<Player />
			</Container>
		</div>
	);
}

export default App;
