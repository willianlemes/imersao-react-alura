import React from 'react';
import logo from '../../assets/img/logo.png';
import Button from '../Button';
import './menu.css';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img
          className="Logo"
          src={logo}
          title="esse aqui é um title"
          alt="esse aqui é um alt"
        />
      </Link>

      <Button as={Link} to="/cadastro/video" className="ButtonLink">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
