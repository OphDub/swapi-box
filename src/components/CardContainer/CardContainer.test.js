/* eslint-disable */
import React from 'react';
import CardContainer from './CardContainer';
import { shallow, mount } from 'enzyme';
import { mockCleanPlanetData } from '../mock-data';
import Card from '../Card/Card';

describe('CARD CONTAINER', () => {
  it('should match the snapshot', () => {
    const mockDataArray = mockCleanPlanetData;
    const wrapper = shallow(<CardContainer data={mockDataArray}/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render different contents based on the length of data it is provided', () => {
    const mockDataArray = mockCleanPlanetData;
    const mockFn = jest.fn();
    const wrapper = mount(<CardContainer type="planets" data={mockDataArray} saveFavorite={mockFn}/>);

    expect(wrapper.find('article').length).toEqual(1);
  });

  it('should render nothing if it is given an empty array', () => {
    const emptyArray = [];
    const mockFn = jest.fn();
    const wrapper = mount(<CardContainer type="planets" data={emptyArray} saveFavorite={mockFn}/>);

    expect(wrapper.find('article').length).toEqual(0);
  });
});