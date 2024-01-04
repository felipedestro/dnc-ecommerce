import React from "react";
import "./index.scss";
import iconSearch from "../../assets/search.svg";
import iconHeart from "../../assets/heart.svg";
import iconProfile from "../../assets/profile.svg";

function Search() {
	return (
		<div className="search">
			<div className="search__input-container">
				<img
					src={iconSearch}
					alt="Ícone de busca"
					className="search__search-logo"
				/>
				<input type="text" placeholder="O que você está procurando?" />
			</div>
			<img src={iconProfile} alt="profile icon" />
			<img src={iconHeart} alt="favorite licon" />
		</div>
	);
}

export default Search;
