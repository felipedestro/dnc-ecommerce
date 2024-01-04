import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import Search from "../../components/Search/Search";
const Home = () => {
	return (
		<div className="home">
			<HeaderMenu />
			<Search />
		</div>
	);
};

export default Home;
