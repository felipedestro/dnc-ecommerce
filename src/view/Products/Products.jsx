import React from "react";
import "./index.scss";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import Search from "../../components/Search/Search";

function Products() {
	return (
		<div className="products">
			<HeaderMenu />
			<div className="products__search">
				<Search />
			</div>
		</div>
	);
}

export default Products;
