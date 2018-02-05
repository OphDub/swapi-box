/* eslint-disable */
import React from 'react';
import Card from './Card';
import { shallow, mount } from 'enzyme';
import {
  mockCleanVehicleData
} from '../mock-data';

describe('CARD', () => {
  let mockElement;
  let mockString;
  let mockFn;

  beforeEach(() => {
    mockElement =   {
      "name": "Sand Crawler",
      "model": "Digger Crawler",
      "passengers": "30",
      "class": "wheeled",
      "favorited": false,
    }
    mockString = "vehicle"
    mockFn = jest.fn();
  })

  it('should match the snapshot', () => {
    const wrapper = shallow(<Card type={mockString} element={mockElement} saveFavorite={mockFn}/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should list all the key value pairs of an object except for name and favorited', () => {
    const wrapper = mount(<Card type={mockString} element={mockElement} saveFavorite={mockFn}/>);

    expect(wrapper.find('li').length).toEqual(3);
  });

  it('should call saveFavorite on button click', () => {
    const wrapper = mount(<Card type={mockString} element={mockElement} saveFavorite={mockFn}/>);

    wrapper.find('button').simulate('click');

    expect(mockFn.mock.calls.length).toEqual(1);
  });
});