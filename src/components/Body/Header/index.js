import React from "react";
import "./styles.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useStateProvider } from "../../../context/StateProvider";

function Header({ spotify }) {
	const [{ user }, dispatch] = useStateProvider();

	return (
		<div className="header">
			<div className="header__left">
				<SearchIcon />
				<input
					placeholder="Search for Artists, Songs or Podcasts "
					type="text"
				/>
			</div>
			<div className="header__right">
				<Avatar src={user?.images[0]?.url} alt="name" />
				<h4>{user?.display_name}</h4>
			</div>
		</div>
	);
}

export default Header;
