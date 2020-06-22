import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import * as S from "./styled";

import { api } from "../../services";

/* interface Produtos {
  id: number;
  nome: string;
  quantidade: string;
  valor: string;
} */

export interface Props {
  isDelete?: boolean;
  isEnter?: boolean;
}

const Register: React.FC<Props> = () => {
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

    console.log("=>", alert);

    if (data.nome == "") {
      alert("campo Produto está vazio");
    } else if (data.quantidade == "") {
      alert("campo Quantidade está vazio");
    } else if (data.valor == "") {
      alert("campo Valor está vazio");
    } else {
      await api.post("/api/produto", data);
      history.push("/");
      alert("Registrado novo Cadastro");
    }
  }

  return (
    <S.WrapeContainer>
      <Link to="/">
        <span>
          <FiArrowLeft color="#fff" size={20} />
          <h2>Home</h2>
        </span>
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
            <S.Button isEnter type="submit">
              Cadastrar Produto
            </S.Button>
          </S.Field>
        </form>
      </S.Border>
    </S.WrapeContainer>
  );
};

export default Register;
