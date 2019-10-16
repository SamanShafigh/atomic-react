import React from "react";
import D from "./D";

const A = ({ children }) => {
  return (
    <div>
      <D>{children}</D>
    </div>
  );
};

export default A;
