import React from "react";
import "./index.scss";
import Header from "../../components/Header/Header";
import { Link, useParams } from "react-router-dom";

function Pay({ data }) {
	const { payId } = useParams();
	const selectProduct = data.find((product) => product.id == payId);

	return (
		<div>
			<Header />
			<div className="pay">
				<div className="pay__left">
					<form>
						<label htmlFor="nome">Nome:</label> <br />
						<input type="text" placeholder="Nome Completo" /> <br />
						<label htmlFor="address">Endereço de Entrega:</label> <br />
						<input type="text" placeholder="Endereço de entrega" />
					</form>
					<div className="pay__payments">
						<h1>Forma de Pagamento:</h1>
						<span>
							<input type="checkbox" name="pix" id="pix" value="Pix" />
							<label htmlFor="pix">Pix</label>
						</span>

						<span>
							<input type="checkbox" name="boleto" id="ticket" value="Boleto" />
							<label htmlFor="ticket">Boleto</label>
						</span>

						<span>
							<input
								type="checkbox"
								name="card"
								id="card"
								value="Cartão de Crédito"
							/>
							<label htmlFor="card">Cartão de crédito</label>
						</span>
					</div>
					<button>
						<Link to={"/home"}>Enviar Pedido</Link>
					</button>
				</div>
				<div className="pay__right">
					<h1>Resumo Pedido</h1>
					<p>
						<span>Produtos (1):</span>
						<span>{selectProduct.price}</span>
					</p>
					<p>
						<span>Total:</span>
						<span>{selectProduct.price}</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Pay;
