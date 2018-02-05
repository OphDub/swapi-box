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
  beforeEach(() => {
    global.localStorage = {
      getItem(keyword) {
        if (!global.localStorage[keyword]) {
          return null;
        }
        return JSON.stringify(global.localStorage[keyword]);
      },
      setItem(keyword, value) {
        global.localStorage[keyword] = value;
      }
    };
  });

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

  it('should fill the film object in state when it mounts', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve, reject) => {
        resolve(mockFilmData)
      })
    }));

    const wrapper = await shallow(<App />);
    await wrapper.instance().componentDidMount();

    const result = mockCleanFilmData

    expect(wrapper.state().film).toEqual(...result);
  });

  it('should be able to getData', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve, reject) => {
        resolve(mockVehicleData)
      })
    }));

    const wrapper = await shallow(<App />);
    const expectedDataType = 'vehicles';
    const expectedResult = mockCleanVehicleData;

    await wrapper.instance().getData(expectedDataType);

    expect(wrapper.state().vehicles).toEqual(expectedResult);
  });

  it('should save objects to the favorites array and change their favorited status to true', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve, reject) => {
        resolve(mockVehicleData)
      })
    }));

    const wrapper = await shallow(<App />);
    const resultArray = mockCleanVehicleData;

    wrapper.instance().saveFavorite(...mockCleanVehicleData);

    expect(wrapper.state().favorites).toEqual(resultArray);
    expect(resultArray[0].favorited).toEqual(true);
  });

  it('should remove duplicate objects from the favorites array', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve, reject) => {
        resolve(mockFilmData)
      })
    }));

    const wrapper = await shallow(<App />);
    const emptyArray = []

    wrapper.instance().saveFavorite(...mockCleanPlanetData);
    wrapper.instance().saveFavorite(...mockCleanPlanetData);

    expect(wrapper.state().favorites).toEqual(emptyArray)
  });
});
