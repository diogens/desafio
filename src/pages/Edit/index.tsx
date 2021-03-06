import React, {
  useEffect,
  useState,
  ChangeEvent,
  FormEvent,
  MouseEvent,
} from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import * as S from "./styled";

import { api } from "../../services";

interface Produtos {
  id: number;
  nome: string;
  quantidade: number;
  valor: number;
}

export interface Props {
  isDelete?: boolean;
  isEnter?: boolean;
}

const Register: React.FC<Props> = ({ isDelete, isEnter }) => {
  const [produto, setProduto] = useState<Produtos>({} as Produtos);
  const [formulario, setFormulario] = useState({
    nome: "Test",
    quantidade: 0,
    valor: 0,
  });

  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    async function loadProduto() {
      await api.get(`/api/produto/${id}`).then((response) => {
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

  async function handleDelete(event: MouseEvent) {
    const { id, nome, quantidade, valor } = produto;

    const data = {
      id,
      nome,
      quantidade,
      valor,
    };

    console.log(data);

    await api.delete("/api/produto", { data }).then((response) => {
      console.log(response.data);
    });

    alert("Produto deletado");

    history.push("/");
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

    await api.put(`/api/produto`, data);

    alert("Atualizado");

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
            <S.Button isEnter type="submit">
              Concluir Edição
            </S.Button>
            <S.Button isDelete className="isDelete" onClick={handleDelete}>
              Deletar
            </S.Button>
          </S.Field>
        </form>
      </S.Border>
    </S.WrapeContainer>
  );
};

export default Register;
