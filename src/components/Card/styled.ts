import styled from "styled-components";

import { Props } from ".";

export const WrapeCard = styled.div<Props>`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap");

  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(to right, var(--blue2), var(--blue));

  width: 200px;
  height: 100px;
  border-radius: 20px;

  padding: 30px 20px;

  cursor: pointer;

  transition: font-size 0.4s, color 0.2s, border-radius 0.2s, background 0.2s;

  &:hover {
    border-radius: 10px;
    background: linear-gradient(to right, var(--blue), var(--blue2));
    h2 {
      color: var(--dark);
    }
  }

  > h2 {
    font-weight: bold;
    color: var(--white);
    font-size: 1.2em;
  }

  > div {
    display: flex;
    justify-content: space-between;

    align-items: center;

    p {
      font-size: 14px;
      font-weight: 100;
      color: var(--white);
    }
  }
`;
