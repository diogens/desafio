import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";

import * as S from "./styled";

import { api } from "../../services";

interface Produtos {
  id: number;
  nome: string;
  quantidade: number;
  valor: number;
}

const Register: React.FC = () => {
  const [produto, setProduto] = useState<Produtos>({} as Produtos);
  const [formulario, setFormulario] = useState({
    nome: "Test",
    quantidade: 0,
    valor: 0,
  });

  const history = useHistory();

  useEffect(() => {
    async function loadProduto() {
      await api.get(`/api/produto/${2}`).then((response) => {
        setProduto(response.data);
        setFormulario(response.data);
      });
    }
    loadProduto();
  }, []);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    /* setFormulario({ ...formulario, [event.target.name]: event.target.value }); */
    const { name, value } = event.target;
    setFormulario({ ...formulario, [name]: value });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const { id } = produto;
    const { nome, quantidade, valor } = formulario;

    const data = {
      id,
      nome,
      quantidade,
      valor,
    };

    console.log("=>", data);

    await api.put(`/api/produto`, data);

    alert("Editado");

    history.push("/");
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
              <h2>Editar Produto</h2>
            </legend>
            <div className="field">
              <label htmlFor="nome">Produto</label>
              <input
                onChange={handleInputChange}
                type="text"
                name="nome"
                id="nome"
                value={formulario.nome}
              />
            </div>
            <div className="field">
              <label htmlFor="quantidade">Quantidade</label>
              <input
                onChange={handleInputChange}
                type="number"
                name="quantidade"
                id="quantidade"
                value={formulario.quantidade}
              />
            </div>
            <div className="field">
              <label htmlFor="valor">Valor</label>
              <input
                onChange={handleInputChange}
                type="number"
                name="valor"
                id="valor"
                value={formulario.valor}
              />
            </div>
            <button type="submit">Concluir Edição</button>
          </S.Field>
        </form>
      </S.Border>
    </S.WrapeContainer>
  );
};

export default Register;
