import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 body {
      color: #000;
      background: #fcf0f2;
      font-family: "Overpass", serif;
      font-weight: 500;
      margin: 0;
      padding: 0;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialised; 
 }
 `;

export const PageContainer = styled.section`
  max-width: 650px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
