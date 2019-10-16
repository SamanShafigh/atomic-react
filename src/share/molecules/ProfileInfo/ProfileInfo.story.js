import React from "react";
import { storiesOf } from "@storybook/react";
import user from "../../../fixtures/user";
import ProfileInfo from "./";

const story = storiesOf("Small Profile Info", module);

story.add("default", () => (
  <div>
    <ProfileInfo name={user.name} img={user.img} email={user.email} />
  </div>
));
