import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

function ProductsCard({ data }) {
	return (
		<div className="card" id="card">
			<img src={data.imgPath} alt={data.title} />
			<div className="card__card-description">
				<p>{data.title}</p>
				<button>
					<Link to={`/products/${data.id}`}>Comprar Look</Link>
				</button>
			</div>
		</div>
	);
}

export default ProductsCard;
