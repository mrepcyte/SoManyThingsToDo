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
  max-width: 750px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ColorChanger = styled.div`
  background-color: #fff;
  margin-top: 10px;
  padding: 14px;
  font-size: 14px;
  position: fixed;
  top: 0;
  left: 10px;
  border-radius: 50px;
`;

export const ColorInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;
