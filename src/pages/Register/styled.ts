import styled from "styled-components";

export const WrapeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80vh;
  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 10px 0px;
  }
`;

export const Border = styled.div`
  padding: 30px;
  border: 2px solid var(--blue);
  border-radius: 20px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 20px 0;
  > legend {
    margin: 10px 0;
  }
  > div {
    margin: 10px 0;
    display: flex;
    flex-direction: column;

    > input {
      margin: 5px 0;
      height: 30px;
      border-radius: 5px;
      border: none;
      padding: 10px;
    }
  }
  > button {
    margin: 10px 0;
    height: 40px;
    border-radius: 4px;
    background: var(--blue);
    color: var(--white);
  }
`;
