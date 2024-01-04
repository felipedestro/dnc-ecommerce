import React from "react";
import "./index.scss";
import logo from "../../assets/logo-dnc.svg";
import cartLogo from "../../assets/cartshop.svg";

function HeaderMenu() {
	return (
		<header className="header-menu">
			<img src={logo} alt="Logo DNC" className="header-menu__logo" />
			<ul>
				<li>Home</li>
				<li>Novidade</li>
				<li>Feminino</li>
				<li>Masculino</li>
				<li>Atendimento</li>
			</ul>
			<div className="header-menu__cart-shop">
				<p>Meu Carrinho</p>
				<img src={cartLogo} alt="Carrinho de compra" />
			</div>
		</header>
	);
}

export default HeaderMenu;
