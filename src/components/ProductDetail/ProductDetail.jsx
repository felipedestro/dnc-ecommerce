import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

function ProductDetail({ data }) {
	return (
		<div className="product-detail">
			<div className="product-detail__product">
				<div className="product-detail__product__card">
					<img src={data.imgPathDetail} alt={data.title} />
					<p>{data.title}</p>
				</div>
				<div className="product-detail__product__description">
					<h1>Descrição</h1>
					<p>{data.title}</p>
				</div>
			</div>
			<div className="product-detail__information">
				<h1>Informações Sobre o Produto</h1>
				<h3>{data.price}</h3>
				<span className="product-detail__information__colors">
					<h4>Cor:</h4>
					<div className="product-detail__information__colors__color">
						{data.colors.map((color) =>
							color === "white" ? (
								<p style={{ background: color, border: "1px solid black" }}></p>
							) : (
								<p style={{ background: color }}></p>
							)
						)}
					</div>
				</span>
				<span className="product-detail__information__sizes">
					<h4>Tamanho:</h4>
					<div className="product-detail__information__sizes_size">
						{data.sizes.map((size) => (
							<p>{size}</p>
						))}
					</div>
				</span>
				<button>
					<Link to={`/pay/${data.id}`}>Finalizar Compra</Link>
				</button>
			</div>
		</div>
	);
}
export default ProductDetail;
