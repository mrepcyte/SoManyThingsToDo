import React from "react";
import { H1, Instructions } from "./styles";

const HeaderComponent = () => {
  return (
    <div>
      <H1>so many things to do!</H1>
      <Instructions>
        I do NOT enjoy working with to-do lists - so much as one glance at the
        list of pending tasks can throw me in a state of agitation. But I am one
        of those people who believe that pastel colors make everything better,
        so here I am, pretending to-do lists do not make me restless. Add one of
        your own items below. Also feel free to change the color of the page, if
        you wish.
      </Instructions>
    </div>
  );
};

export default HeaderComponent;
