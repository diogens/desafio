import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import * as S from "./styled";

import logo from "../../assets/logo.png";
import { api } from "../../services";

/* interface Produtos {
  id: number;
  nome: string;
  quantidade: string;
  valor: string;
} */

const Register: React.FC = () => {
  const [formulario, setFormulario] = useState({
    nome: "",
    quantidade: "",
    valor: "",
  });

  const history = useHistory();

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.name);
    /* setFormulario({ ...formulario, [event.target.name]: event.target.value }); */
    const { name, value } = event.target;
    setFormulario({ ...formulario, [name]: value });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const { nome, quantidade, valor } = formulario;

    console.log(formulario);

    const data = {
      nome,
      quantidade,
      valor,
    };

    console.log("=>", data);

    await api.post("/api/produto", data);

    alert("Registrado novo Cadastro");

    history.push("/");
  }

  return (
    <S.WrapeContainer>
      <Link to="/">
        <FiArrowLeft color="#fff" size={20} />
      </Link>

      <S.Border>
        <form onSubmit={handleSubmit}>
          <S.Field>
            <legend>
              <h2>Cadastro de Produtos</h2>
            </legend>
            <div className="field">
              <label htmlFor="nome">Produto</label>
              <input
                onChange={handleInputChange}
                type="text"
                name="nome"
                id="nome"
              />
            </div>
            <div className="field">
              <label htmlFor="quantidade">Quantidade</label>
              <input
                onChange={handleInputChange}
                type="number"
                name="quantidade"
                id="quantidade"
              />
            </div>
            <div className="field">
              <label htmlFor="valor">Valor</label>
              <input
                onChange={handleInputChange}
                type="number"
                name="valor"
                id="valor"
              />
            </div>
            <button type="submit">Cadastrar Produto</button>
          </S.Field>
        </form>
      </S.Border>
    </S.WrapeContainer>
  );
};

export default Register;
