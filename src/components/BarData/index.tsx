import React, { useEffect, useState } from "react";

import { api } from "../../services";

import * as S from "./styled";

const data = new Date();

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
  }, []);
  return (
    <S.WrapeContainer>
      <p>
        Data: {`${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`} -
        {data.getHours()}:{`${data.getMinutes()}`} | Total de produtos -
        <span> {produto.length}</span>
      </p>
    </S.WrapeContainer>
  );
};

export default BarData;
