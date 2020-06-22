import styled from "styled-components";

export const WraperContainer = styled.div`
  grid-area: CT;
  background: var(--dark);

  display: flex;
  justify-content: center;

  padding: 10px;
  display: flex;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--blue);
    border-radius: 4px;
  }
`;
