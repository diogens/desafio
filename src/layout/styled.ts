import styled from "styled-components";

export const WrapperContainer = styled.div`
  background: var(--dark);
  display: grid;
  grid-template-columns: 70px auto 250px;
  grid-template-rows: 45px auto 52px;
  grid-template-areas:
    "SM TB TB"
    "SM CT LP"
    "SM BD LP";
  height: 100vh;

  /* @media only screen and (max-width: 600px) {
    display: none;
  } */
  @media only screen and (max-width: 600px) {
    grid-template-columns: 70px auto 50px;
    grid-template-rows: 45px auto 52px;
    grid-template-areas:
      "SM TB TB"
      "SM CT LP"
      "SM BD LP";
    height: 100vh;
  }
`;
