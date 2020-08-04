import React from 'react';
import PageDefault from '../../../componentes/PageDefault';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <Link to="/categoria/cadastro">Cadastrar Categoria</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
