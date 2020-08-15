import React from "react";
import "./styles.css";
import Sidebar from "../Sidebar";
import Body from "../Body";
import Footer from "../Footer";

function Player({ spotify }) {
	return (
		<div className="player">
			<div className="player__body">
				<Sidebar />
				<Body spotify={spotify} />
			</div>
			<Footer spotify={spotify} />
		</div>
	);
}

export default Player;