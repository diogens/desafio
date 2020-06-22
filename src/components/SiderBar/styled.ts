import styled from "styled-components";

export const WraperContainer = styled.div`
  grid-area: SM;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px 0;
  background: var(--dark);
  border-right: 2px solid var(--blue);

  max-height: 100vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Separator = styled.div`
  width: 32px;
  border-bottom: 2px solid var(--quaternary);

  margin-bottom: 8px;
`;
