import React, { useState } from 'react';
import PageDefault from '../../../componentes/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../componentes/FormField';
import Button from '../../../componentes/Button';

// import { Container } from './styles';

function CadastroVideo() {
  const valoesIniciais = { nome: '', descricao: '', cor: '#f9f5f5' };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoesIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(event) {
    const { getAttribute, value } = event.target;
    setValue(event.target.getAttribute('name'), event.target.value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log('VEIO TENTAR ENVIAR');
          setCategorias([...categorias, values]);
          setValues(valoesIniciais);
        }}
      >
        <FormField
          label="Nome Categoria"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />
        <div>
          <label>
            Descrição
            <textarea
              name="descricao"
              value={values.descricao}
              onChange={handleChange}
            ></textarea>
          </label>
        </div>
        <div>
          <label>
            Cor da Categoria
            <input
              name="cor"
              type="color"
              value={values.cor}
              onChange={handleChange}
            />
          </label>
        </div>
        <Button>Cadastrar</Button>
      </form>

      <ul>
        {categorias.map((categoria) => {
          return <li key={categoria.nome}>{categoria.nome}</li>;
        })}
      </ul>

      <Link to="/">Home</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
