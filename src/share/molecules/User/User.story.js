import React from "react";
import { storiesOf } from "@storybook/react";
import User from "./";
import user from "../../../fixtures/user";

const story = storiesOf("User", module);

story.add("default", () => (
  <div>
    <User name={user.name} img={user.img} occupation={user.occupation} />

    <pre>{`
      <User name={user.name} img={user.img} occupation={user.occupation} />
    `}</pre>
  </div>
));
