import React from 'react';
import logo from '../../assets/img/logo.png';
import Button from '../Button';
import './menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <img
        className="Logo"
        src={logo}
        title="esse aqui é um title"
        alt="esse aqui é um alt"
      />

      <Button href="/" className="ButtonLink">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
