import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { useState } from "react";

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
				<span className="product-detail__colors">
					<p>
						Cor: {""}
						{data.colors.map((color, index) =>
							index + 1 < data.colors.length ? (
								<span key={index}>{`${color}, `}</span>
							) : (
								<span key={index}>{color}</span>
							)
						)}
					</p>
					<div className="product-detail__colors__color">
						{data.colors.map((color, index) =>
							color === "white" ? (
								<p
									style={{ background: color, border: "1px solid black" }}
									key={index}></p>
							) : (
								<p style={{ background: color }} key={index}></p>
							)
						)}
					</div>
				</span>
				<span className="product-detail__sizes">
					<p>Tamanho:</p>
					<div className="product-detail__sizes_size">
						{data.sizes.map((size, index) => (
							<p key={index}>{size}</p>
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
