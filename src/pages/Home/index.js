import React from 'react';
import dadosIniciais from '../../data/dados_iniciais.json';
import Menu from '../../componentes/Menu';
import BannerMain from '../../componentes/BannerMain';
import Carousel from '../../componentes/Carousel';

function Home() {
  return (
    <div style={{ background: '#414142' }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={'O que é front end?'}
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <Carousel category={dadosIniciais.categorias[1]} />

      <Carousel category={dadosIniciais.categorias[2]} />

      <Carousel category={dadosIniciais.categorias[3]} />

      <Carousel category={dadosIniciais.categorias[4]} />

      <Carousel category={dadosIniciais.categorias[5]} />
    </div>
  );
}

export default Home;
