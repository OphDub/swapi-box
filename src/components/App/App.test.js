/* eslint-disable */
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import { apiGet } from '../helper/helper';
import {
  mockFilmData,
  mockCleanFilmData,
  mockPeopleData,
  mockCleanPeopleData,
  mockPlanetData,
  mockCleanPlanetData,
  mockVehicleData,
  mockCleanVehicleData
} from '../mock-data';

describe('APP', () => {
  it('should match the snapshot', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve, reject) => {
        resolve(mockFilmData)
      })
    }));

    const wrapper = await shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state with an empty film object and empty arrays for planets, people, vehicles, and favorites', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve, reject) => {
        resolve(mockFilmData)
      })
    }));

    const mockFn = jest.fn()
    const emptyObj = {};
    const emptyArray = [];
    const wrapper = await shallow(<App getRandomFilmData={mockFn}/>);

    expect(wrapper.state().film).toEqual(emptyObj);
    expect(wrapper.state().planets).toEqual(emptyArray);
    expect(wrapper.state().people).toEqual(emptyArray);
    expect(wrapper.state().vehicles).toEqual(emptyArray);
    expect(wrapper.state().favorites).toEqual(emptyArray);
  });

  it('should choose a random object from an array upon mounting', () => {

  });

  it('should be able to getData', () => {

  });

  it('should save objects to the favorites array and not add duplicates', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve, reject) => {
        resolve(mockFilmData)
      })
    }));

    const wrapper = await shallow(<App />);
    const result = [...mockCleanVehicleData, ...mockCleanPlanetData]

    wrapper.instance().saveFavorite(...mockCleanPlanetData)
    wrapper.instance().saveFavorite(...mockCleanVehicleData)
    wrapper.instance().saveFavorite(...mockCleanPlanetData)

    expect(wrapper.state().favorites).toEqual(result)
  });

  it('should not save the save object to the favorites array', () => {

  })

  it('should remove objects from the favorites array', () => {

  });
});
