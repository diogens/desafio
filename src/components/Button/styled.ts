import styled from "styled-components";

import { Props } from ".";

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  background: tomato;
  width: 48px;
  height: 48px;

  border-radius: 3px;

  margin-bottom: 10px;

  background-color: ${(props) =>
    props.isLogo ? "var(--tomato)" : "var(--gray)"};

  position: relative;
  cursor: pointer;

  img {
    width: 48px;
    height: 48px;
    border-radius: 3px;
  }

  transition: border-radius 0.2s, background 0.2s;

  &:hover {
    border-radius: 10px;
    background: ${(props) => (props.isHome ? "var(--blue)" : "var(--tomato)")};
  }
`;
