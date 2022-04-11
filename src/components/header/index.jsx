import React, { useState } from "react";
import { H1, Instructions } from "./styles";

const HeaderComponent = () => {
  return (
    <div>
      <H1>so many things to do!</H1>
      <Instructions>
        I practically loathe to-do lists - so much as one glance at the list of
        pending tasks can throw me in a state of agitation. But I needed an idea
        for my React project. So I decidated to create a cute pastel-colored
        to-do list. It probably won't help me with restlesness, but hey, at
        least it's beautiful.
      </Instructions>
    </div>
  );
};

export default HeaderComponent;
