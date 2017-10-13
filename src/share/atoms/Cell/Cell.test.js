import React from 'react';
import { shallow } from 'enzyme';
import Cell from './';

describe('Cell', () => {
  it('renders children', () => {
    const button = shallow
      .create(<Cell>Hello Cell</Cell>)
      .toJSON();
    expect(button).toMatchSnapshot();
  });
});
