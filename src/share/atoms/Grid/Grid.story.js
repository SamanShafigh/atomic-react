import React from "react";
import { storiesOf } from "@storybook/react";
import Grid from "./";
import Cell from "../Cell";
import ProfileImage from "../../molecules/ProfileImage";

const story = storiesOf("Grid", module);

story.add("default", () => (
  <div>
    <Grid>Default Grid</Grid>
  </div>
));

story.add("with cell", () => (
  <div>
    <Grid>
      <Cell>cell 1.1</Cell>
      <Cell>cell 1.2</Cell>
      <Cell>cell 1.3</Cell>
    </Grid>
    <Grid>
      <Cell>cell 2.1</Cell>
      <Cell>cell 2.2</Cell>
      <Cell>cell 2.3</Cell>
    </Grid>
  </div>
));

story.add("with cell and profile", () => (
  <div>
    <Grid>
      <Cell>cell 3.1</Cell>
      <Cell>
        <ProfileImage url="static/profile/profile-smal_20.gif" />
      </Cell>
      <Cell>cell 3.3</Cell>
    </Grid>
  </div>
));
