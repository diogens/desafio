import React, { useEffect, useState } from "react";

import { api } from "../../services";

import * as S from "./styled";

interface Produtos {
  id: number;
  nome: string;
  quantidade: string;
  valor: string;
}

const BarData: React.FC = () => {
  const [produto, setProduto] = useState<Produtos[]>([]);

  useEffect(() => {
    async function loadProdutos() {
      await api.get("/api/produtos").then(({ data }) => {
        setProduto(data);
      });
    }
    loadProdutos();

    console.log(produto.length);
  }, []);
  return (
    <S.WrapeContainer>
      <p>
        Data: 19/06/2020 - 17:02hs | Total de produtos -
        <span> {produto.length}</span>
      </p>
    </S.WrapeContainer>
  );
};

export default BarData;
