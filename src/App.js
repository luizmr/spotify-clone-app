import React, { useEffect, useState } from "react";

import "./App.css";
import Player from "./components/Player";
import Login from "./components/Login";
import { getTokenFromUrl } from "./components/Spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateProvider } from "./context/StateProvider";

const spotify = new SpotifyWebApi();

function App() {
	// const [token, setToken] = useState(null);
	const [{ user, token }, dispatch] = useStateProvider();

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = "";

		const _token = hash.access_token;

		if (_token) {
			// setToken(_token);
			dispatch({
				type: "SET_TOKEN",
				token: _token,
			});

			// giving the access token to spotify api
			spotify.setAccessToken(_token);

			spotify.getMe().then((user) => {
				console.log(user);

				dispatch({ type: "SET_USER", user });
			});

			spotify.getUserPlaylists().then((playlists) => {
				dispatch({
					type: "SET_PLAYLISTS",
					playlists: playlists,
				});
			});

			spotify.getPlaylist("37i9dQZEVXcJT6jYCQBJke").then((response) => {
				dispatch({
					type: "SET_DISCOVER_WEEKLY",
					discover_weekly: response,
				});
			});

			spotify.getMyTopArtists().then((response) =>
				dispatch({
					type: "SET_TOP_ARTISTS",
					top_artists: response,
				})
			);

			dispatch({
				type: "SET_SPOTIFY",
				spotify: spotify,
			});
		}

		console.log(_token);
	}, [token, dispatch]);

	console.log(user);
	console.log(token);

	return (
		<div className="App">
			{token ? <Player spotify={spotify} /> : <Login />}
		</div>
	);
}

export default App;
