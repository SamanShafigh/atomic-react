import React from 'react';
import { shallow } from 'enzyme';
import Button from './';

const H = {
  NOOP: () => {}
};

describe('Button', () => {
  it('renders children', () => {
    const button = shallow
      .create(<Button onClick={H.NOOP}>Hello Button</Button>)
      .toJSON();
    expect(button).toMatchSnapshot();
  });

  /**
   * test for the clicking action of the button
   */
  it('Should invoke onClick when "Button" is clicled', () => {
    const clickMock = jest.fn();
    const wrapper = shallow(<Button onClick={clickMock}> Facebook </Button>);
    wrapper.find('button').simulate('click');
    expect(clickMock.mock.calls.length).toEqual(1);
  });
});
