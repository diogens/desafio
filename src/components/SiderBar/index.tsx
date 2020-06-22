import React from "react";

import * as S from "./styled";

import Button from "../Button";

const SiderBar: React.FC = () => {
  return (
    <S.WraperContainer>
      <Button isLogo isHome />
    </S.WraperContainer>
  );
};

export default SiderBar;
