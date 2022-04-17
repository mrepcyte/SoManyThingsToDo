import styled from "styled-components";

export const H1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  padding: 30px;
  border-radius: 200px;
  box-shadow: 8px 5px 1px #9f5bb0;
  max-width: 450px;
  font-size: 22px;
  background-color: #dbc1e1;

  @media (max-width: 700px) {
    max-width: 300px;
  }

  @media (max-width: 420px) {
    max-width: 260px;
  }
`;

export const Instructions = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 650px;
  margin: 14px auto;
  padding: 12px;
  font-size: 14px;

  @media (max-width: 700px) {
    max-width: 450px;
    padding: 20px;
  }
`;
