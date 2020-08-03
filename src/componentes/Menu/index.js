import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './ButtonLink';
// import { Container } from './styles';

function Menu() {
  return (
    <>
      <nav className="Menu">
        <a href="/">
          <img className="Logo" src={Logo} alt="DendêFlix Logo" />
        </a>

        <Button as="a" className="ButtonLink">
          Novo Vídeo
        </Button>
      </nav>
    </>
  );
}

export default Menu;
