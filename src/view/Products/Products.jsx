import React from "react";
import "./index.scss";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import Search from "../../components/Search/Search";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail/ProductDetail";

function Products({ data }) {
	const { productId } = useParams();
	const selectedProduct = data.find((product) => product.id == productId);
	return (
		<div className="products">
			<HeaderMenu />
			<div className="products__search">
				<Search />
			</div>
			<div className="products__detail">
				<ProductDetail data={selectedProduct} />
			</div>
		</div>
	);
}

export default Products;
