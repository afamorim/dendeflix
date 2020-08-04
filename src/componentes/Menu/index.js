import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './ButtonLink';
// import { Container } from './styles';

function Menu() {
  return (
    <>
      <nav className="Menu">
        <Link to="/">
          <img className="Logo" src={Logo} alt="DendêFlix Logo" />
        </Link>

        <Button as={Link} className="ButtonLink" to="/video/cadastro">
          Novo Vídeo
        </Button>
      </nav>
    </>
  );
}

export default Menu;
