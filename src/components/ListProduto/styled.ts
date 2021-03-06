import styled from "styled-components";

export const WrapeContainer = styled.div`
  grid-area: LP;

  border-left: 2px solid var(--blue);

  background: var(--dark);

  > button {
    margin: 10px 0;
    height: 40px;
    width: 100%;
    border-radius: 4px;
    background: var(--tomato);
    color: var(--white);

    transition: background 0.2s, color 0.2s;

    &:hover {
      background: white;
      color: var(--tomato);
    }
  }

  > div {
    display: flex;
  }

  /*   display: flex;
  justify-content: center; */

  padding: 10px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--blue);
    border-radius: 4px;
  }

  > div {
    /*  display: flex;
    flex-direction: row; */

    > svg {
      color: #888;
      font-size: 15px;
      position: absolute;
      margin: 12px 5px;
      right: 20px;
    }

    > input {
      padding: 10px;
      margin: 5px 0;
      height: 30px;
      border-radius: 5px;
      border: none;
      width: 100%;
    }
  }
`;
