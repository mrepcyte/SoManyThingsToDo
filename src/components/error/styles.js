import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.6);
`;

export const Error = styled.div`
  position: fixed;
  border-radius: 12px;
  top: 30vh;
  left: 30%;
  width: 40%;
  z-index: 100;
  background-color: #dbc1e1;
  overflow: hidden;
`;

export const H1 = styled.h1`
  padding: 10px 10px 0 10px;
  font-size: 22px;
`;

export const P = styled.p`
  padding: 0 10px;
  font-size: 16px;
`;

export const Button = styled.button`
  font: inherit;
  border: none;
  float: right;
  border-radius: 10px;
  background: #4f005f;
  color: white;
  padding: 0.25rem 1rem;
  margin: 0.3rem;
  cursor: pointer;
`;
