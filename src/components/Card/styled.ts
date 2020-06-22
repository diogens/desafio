import styled from "styled-components";

import { Props } from ".";

export const WrapeCard = styled.div<Props>`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap");

  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--blue);

  width: 200px;
  height: 100px;
  border-radius: 20px;
  padding: 0px 0px;
  cursor: pointer;

  transition: border-radius 0.2s, background 0.2s;

  &:hover {
    border-radius: 10px;
    background: ${(props) => (props.isEdit ? "var(--blue)" : "var(--blue2)")};
  }

  > header {
    background: var(--blue2);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom: 1px solid var(--white);
    display: flex;

    justify-content: flex-end;

    > button {
      border: none;
      background: transparent;

      transition: 0.2s, background 0.2s;
      &:hover {
        background: var(--blue);
      }
      > svg {
        margin: 3px;
        transition: 0.2s, background 0.2s;
        &:hover {
          background: var(--blue);
        }
      }
    }
  }

  > h2 {
    font-weight: bold;
    color: var(--white);
    font-size: 1.2em;
    padding: 1px 15px;
  }

  > div {
    padding: 1px 15px;
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
