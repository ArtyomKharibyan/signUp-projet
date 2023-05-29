import React from "react";

import { ReactComponent as Dots } from "./somefolder/images/dots.svg";

const DotsForUpperBackground = () => (
  <Dots
    style={{
      position: "absolute",
      left: "5px",
      zIndex: "-2",
      top: "5px",
    }}
  />
);

export default DotsForUpperBackground;
