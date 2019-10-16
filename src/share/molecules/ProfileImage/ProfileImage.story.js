import React from "react";
import { storiesOf } from "@storybook/react";
import ProfileImage from "./";
import user from "../../../fixtures/user";

const story = storiesOf("Profile Image", module);

story.add("default", () => (
  <div>
    <ProfileImage url="static/profile/a.jpg" />
    <ProfileImage url="static/profile/b.jpg" />
    <ProfileImage url="static/profile/c.jpg" />
    <ProfileImage url="static/profile/d.jpg" />
    <ProfileImage url="static/profile/e.jpg" />
    <ProfileImage url="static/profile/f.jpg" />
    <ProfileImage url="static/profile/g.jpg" />
  </div>
));

story.add("size", () => (
  <div>
    <ProfileImage url="static/profile/g.jpg" size="small" />
    <ProfileImage url="static/profile/g.jpg" />
    <ProfileImage url="static/profile/g.jpg" size="medium" />
    <ProfileImage url="static/profile/g.jpg" size="large" />
  </div>
));
