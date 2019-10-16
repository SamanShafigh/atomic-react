import React from "react";
import { storiesOf } from "@storybook/react";
import Textarea from "./";

const story = storiesOf("Textarea", module);

story.add("default", () => (
  <div>
    <div>
      <Textarea onClick={() => {}} value="Sample data" />
    </div>
  </div>
));
