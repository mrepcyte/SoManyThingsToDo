import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 body {
    color: #000;
    background: #fcf0f2;
    font-family: "Overpass", serif;
    font-weight: 600;
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialised; 
 }
 `;

export const PageContainer = styled.section`
  max-width: 850px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ColorChanger = styled.div`
  background-color: #dbc1e1;
  font-weight: 800;
  margin-top: 10px;
  padding: 14px;
  font-size: 14px;
  position: fixed;
  top: 0;
  left: 10px;
  border: 2px solid #000;
  border-radius: 50px;
  transition: background-color 0.7s ease-in;

  &:hover {
    background-color: #9f5bb0;
  }
`;

export const ColorInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;
