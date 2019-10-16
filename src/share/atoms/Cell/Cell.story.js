import React from "react";
import { storiesOf } from "@storybook/react";
import Cell from "./";

const story = storiesOf("Cell", module);

story.add("sizes", () => (
  <div>
    <Cell>Default Cell</Cell>
  </div>
));
