import React from "react";

import * as S from "./styled";

import logo from "../../assets/logo.png";

import * as FA from "react-icons/go";

export interface Props {
  isLogo?: boolean;
  add?: boolean;
  list?: boolean;
  isHome?: boolean;
  title?: string;
  selected?: boolean;
}

const Button: React.FC<Props> = ({
  isLogo,
  add,
  list,
  isHome,
  title,
  selected,
}) => {
  return (
    <S.Button
      isLogo={isLogo}
      isHome={isHome}
      title={title}
      selected={selected}
      add={add}
      list={list}
    >
      {isHome && (
        <a href="/">
          <img src={logo} alt="" />
        </a>
      )}
      {add && <FA.GoDiffAdded color="#FFF" size={33} />}
      {list && <FA.GoListOrdered color="#FFF" size={33} />}
    </S.Button>
  );
};

export default Button;
