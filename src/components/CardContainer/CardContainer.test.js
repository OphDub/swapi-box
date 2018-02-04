/* eslint-disable */
import React from 'react';
import CardContainer from './CardContainer';
import { shallow, mount } from 'enzyme';
import Card from '../Card/Card';

describe('CARD CONTAINER', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<CardContainer />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should changed renderedContents based on the length of data it is provided', () => {
    const mockData = []
    const wrapper = shallow(<CardContainer data={mockData}/>)

    //test that there are no Card components?
  });
});