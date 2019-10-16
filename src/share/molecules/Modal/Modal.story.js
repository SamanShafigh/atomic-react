import React from "react";
import { storiesOf } from "@storybook/react";
import Model from "./";

const story = storiesOf("Model", module);
const text =
  "This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.";

story.add("default visible", () => (
  <div>
    <Model title="Experience" isVisible={true}>
      {text}
    </Model>
  </div>
));
