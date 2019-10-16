import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./";

const story = storiesOf("Checkbox", module);

class CheckboxWrapper extends React.Component {
  constructor() {
    super();
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.state = {
      checked: true
    };
  }

  handleCheckbox() {
    let checked = !this.state.checked;
    this.setState({ checked });
  }

  render() {
    return (
      <Checkbox
        id="my-checkbox"
        checked={this.state.checked}
        onChange={this.handleCheckbox}
      />
    );
  }
}

story.add("Functional checkbox", () => (
  <div>
    <CheckboxWrapper />
  </div>
));
