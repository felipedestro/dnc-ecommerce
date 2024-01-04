import React from 'react';
import './index.scss';
import dncLogo from "../../assets/logo-dnc.svg";

function Header() {
  return (
    <div className="header">
      <img src={dncLogo} alt="Logo da DNC na cor preta e sem fundo" />
    </div>
  )
}

export default Header;