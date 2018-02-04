/* eslint-disable */
import React from 'react'
import Welcome from './Welcome';
import { shallow } from 'enzyme';

describe('WELCOME', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Welcome />)

    expect(wrapper).toMatchSnapshot();
  });
});