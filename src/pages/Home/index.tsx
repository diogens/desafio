import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

import { api } from "../../services";

import Card from "../../components/Card";

import * as S from "./styled";

interface Produtos {
  id: number;
  nome: string;
  quantidade: string;
  valor: number;
}

const Home: React.FC = () => {
  const [produto, setProduto] = useState<Produtos[]>([]);

  useEffect(() => {
    async function loadProdutos() {
      await api.get("/api/produtos").then(({ data }) => {
        setProduto(data);
      });
    }
    loadProdutos();
  }, []);

  return (
    <S.WraperContainer>
      <Link to="/register">
        <FaPlus size={22} />
        <h2>Adicionar Produto</h2>
        <span />
      </Link>
      {produto.map(({ id, nome, quantidade, valor }) => (
        <Link key={id} to={`/edit/${id}`}>
          <Card
            isDelete
            name={nome}
            value={valor.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
            qtd={quantidade}
          />
        </Link>
      ))}
    </S.WraperContainer>
  );
};

export default Home;
