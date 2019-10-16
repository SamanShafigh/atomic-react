import React from "react";
import { storiesOf } from "@storybook/react";
import posts from "../../../fixtures/posts";
import Panel from "./";
import Post from "../../organisms/Post";

const story = storiesOf("Panel", module);
const text =
  "This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.";

story.add("default", () => (
  <div>
    <Panel title="Experience" icon="ic_face">
      {text}
    </Panel>
  </div>
));

story.add("default without icon", () => (
  <div>
    <Panel title="Experience">{text}</Panel>
  </div>
));

story.add("with posts", () => (
  <div>
    <Panel title="Experience" icon="ic_face">
      {posts.map(post => (
        <Post post={post} />
      ))}
    </Panel>
  </div>
));
