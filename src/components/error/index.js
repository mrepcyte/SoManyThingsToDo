import React from "react";
import { Backdrop, Error, H1, P, Button } from "./styles";

const ErrorComponent = (props) => {
  return (
    <Backdrop>
      <Error>
        <H1>{props.title}</H1>
        <P>{props.message}</P>
        <Button onClick={props.onConfirm}>Okay...</Button>
      </Error>
    </Backdrop>
  );
};

export default ErrorComponent;
