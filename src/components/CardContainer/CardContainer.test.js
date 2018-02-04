/* eslint-disable */
import React from 'react';
import CardContainer from './CardContainer';
import { shallow, mount } from 'enzyme';

describe('CARD CONTAINER', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<CardContainer />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should contain the correct number of Cards', () => {

  });
});