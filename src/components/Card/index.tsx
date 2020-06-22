import React from "react";

import * as S from "./styled";

export interface Props {
  name?: string;
  value?: string;
  qtd?: string;
  isEdit?: boolean;
  isDelete?: boolean;
}

const Card: React.FC<Props> = ({ name, value, qtd }) => {
  return (
    <S.WrapeCard>
      {/* <header>
        {isEdit && (
          <button>
            <AiFillEdit color="#000" size={20} />
          </button>
        )}
        {isDelete && (
          <button>
            <AiFillDelete color="#fa021b" size={20} />
          </button>
        )}
      </header> */}
      <h2>{name}</h2>
      <div>
        {value && <p>{value}</p>}
        {qtd && <p>qtd: {qtd}</p>}
      </div>
    </S.WrapeCard>
  );
};

export default Card;
