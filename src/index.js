import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/video/Cadastro';
import CadastroCategoria from './pages/categoria/Cadastro';

const Page404 = () => <div>404 Page</div>;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/video/cadastro" component={CadastroVideo} />
      <Route path="/categoria/cadastro" component={CadastroCategoria} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
