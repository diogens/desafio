import React, { useState, ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";

import { api } from "../../services";

import Card from "../Card";

import * as S from "./styled";

const ListProduto: React.FC = () => {
  const [produto, setProduto] = useState({
    id: "",
    nome: "",
    quantidade: "",
    valor: 0,
  });

  const { id, nome, quantidade, valor } = produto;

  async function handleDelete(event: ChangeEvent<HTMLButtonElement>) {
    console.log("oi", event);
    const data = {
      id,
      nome,
      quantidade,
      valor,
    };

    console.log(data);

    /* await api.delete("/api/produto");

    alert("Produto deletado"); */
  }

  async function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    async function loadProduto() {
      const { value } = event.target;
      if (value) {
        await api.get(`/api/produto/${value}`).then((response) => {
          setProduto(response.data);
        });
      } else {
        console.log("vazio");
      }
    }
    console.log(event.target.value);
    loadProduto();
  }

  return (
    <S.WrapeContainer>
      <div>
        <FaSearch />
        <input
          type="search"
          name="search"
          results={1}
          placeholder="Codigo do produto"
          onChange={handleInputChange}
        />
      </div>
      {produto.id && (
        <>
          <Card
            isDelete
            isEdit
            name={produto.nome}
            value={produto.valor.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
            qtd={produto.quantidade}
          />
          <button>deletar</button>
        </>
      )}
    </S.WrapeContainer>
  );
};

export default ListProduto;
