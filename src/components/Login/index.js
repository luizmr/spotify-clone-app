import React from "react";
import "./styles.css";
import logo from "../../assets/logo.png";
import { loginUrl } from "../Spotify";

export default function index() {
	return (
		<div className="login">
			<img src={logo} alt="logo" />
			<a href={loginUrl}>LOGIN WITH SPOTIFY</a>
		</div>
	);
}
