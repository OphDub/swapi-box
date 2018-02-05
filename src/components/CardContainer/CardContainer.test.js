/* eslint-disable */
import React from 'react';
import CardContainer from './CardContainer';
import { shallow, mount } from 'enzyme';
import { mockPlanetData } from '../mock-data';
import Card from '../Card/Card';

describe('CARD CONTAINER', () => {
  it('should match the snapshot', () => {
    const mockDataArray = [mockPlanetData]
    const wrapper = shallow(<CardContainer data={mockDataArray}/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should changed renderedContents based on the length of data it is provided', () => {
    const emptyArray = []
    const wrapper = shallow(<CardContainer data={emptyArray}/>)

    //test that there are no Card components?
  });
});