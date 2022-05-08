import styled from "styled-components";

export const Form = styled.div`
  border-radius: 12px;
  max-width: 100%;
  background-color: #f7cd92;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
  font-size: 12px;
  padding: 18px;
  margin-left: -20px;

  @media (max-width: 780px) {
    max-width: 60%;
    padding: 14px;
  }
`;

export const H2 = styled.h2`
  padding-bottom: 2px;
  border-bottom: 1px solid #fff;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.2rem;
  display: block;
  font-size: 15px;

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const Input = styled.input`
  font: inherit;
  padding: 0.2rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 20rem;
  max-width: 90%;

  &:focus {
    outline-color: #9f5bb0;
  }
`;

export const Textarea = styled.textarea`
  font: inherit;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 20rem;
  max-width: 90%;
  height: 50px;

  &:focus {
    outline-color: #9f5bb0;
  }
`;

export const Button = styled.button`
  font-family: "Overpass", serif;
  font-weight: 900;
  background-color: #dbc1e1;
  padding: 7px;
  border: 1px solid #fff;
  border-radius: 5px;
  float: right;

  &:hover {
    background-color: #9f5bb0;
    font-weight: 1000;
  }
`;
