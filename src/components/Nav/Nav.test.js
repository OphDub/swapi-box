/* eslint-disable */
import React from 'react';
import Nav from './Nav';
import { shallow } from 'enzyme';

describe('NAV', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Nav />)

    expect(wrapper).toMatchSnapshot();
  });

  it('has buttons which should call getData on click', () => {

  });
});