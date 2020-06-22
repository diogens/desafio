import styled from "styled-components";

export const WraperContainer = styled.div`
  display: grid;
  svg {
    color: #fff;
    margin: 0 10px;
  }
  > a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > span {
      width: 100%;
      height: 2px;
      background: var(--white);
      margin: 10px 0;
    }
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: auto;
  }
  @media only screen and (min-width: 600px) {
    grid-template-columns: auto auto;
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: auto auto auto;
  }
  @media only screen and (min-width: 1440px) {
    grid-template-columns: auto auto auto auto;
  }
  /* @media only screen and (min-width: 600px) {
    grid-template-columns: auto auto;
  } */

  /* grid-template-columns: auto auto; */
`;
