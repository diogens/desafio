import React from "react";

import * as S from "./styled";

const Content: React.FC = ({ children }) => {
  return (
    <S.WraperContainer>
      <div>{children}</div>
    </S.WraperContainer>
  );
};

export default Content;
