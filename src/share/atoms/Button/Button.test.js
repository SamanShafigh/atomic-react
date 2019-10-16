import React from "react";
import { shallow } from "enzyme";
import serializer from "jest-glamor-react";
import Button from "./";

expect.addSnapshotSerializer(serializer);
describe("Button", () => {
  /**
   * Snapshot Testing
   */
  it("renders children", () => {
    const button = shallow
      .create(<Button onClick={H.NOOP}>Hello Button</Button>)
      .toJSON();

    expect(button).toMatchSnapshot();
  });

  /**
   * Test for the clicking action of the button
   */
  it('Should invoke onClick when "Button" is clicled', () => {
    const clickMock = jest.fn();
    const wrapper = shallow(<Button onClick={clickMock}> Facebook </Button>);

    wrapper.find("button").simulate("click");
    expect(clickMock.mock.calls.length).toEqual(1);
  });
});
