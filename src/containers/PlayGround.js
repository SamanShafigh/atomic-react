import React from "react";
import container from "../Container";

class PlayGround extends React.Component {
  render() {
    return (
      <div>
        {["A", "B", "C"].map(componentId => {
          let Component = container.get(componentId);
          return <Component>{componentId}</Component>;
        })}
      </div>
    );
  }
}

export default PlayGround;
