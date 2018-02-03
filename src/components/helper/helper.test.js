/* eslint-disable */
import {
  apiGet,
  fetchAndParse,
  cleanFilmData,
  cleanPeopleData,
  cleanVehicleData,
  cleanPlanetData,
  getNameData,
} from './helper.js';

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

describe('HELPER', () => {
  describe('fetchAndParse', () => {
    it('calls fetch with the correct params', () => {
      const expectedParams = `https://swapi.co/api/films/`

      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve(mockFilmData)
        })
      }));

      fetchAndParse(expectedParams);

      expect(window.fetch).toHaveBeenCalledWith(expectedParams);
    });

    it('returns an object when status code is OK', () => {
      const mockRequest = `https://swapi.co/api/films/`;

      expect(fetchAndParse(mockRequest)).resolves.toEqual(mockFilmData);
    });

    it('returns an error when status code is not OK', () => {
      const mockRequest = `https://swapi.co/api/films/`;

      window.fetch = jest.fn().mockImplementation(() => ({
        status: 500,
      }));

      expect(fetchAndParse(mockRequest)).rejects.toEqual(Error('Please wait fetching Star Wars facts'));
    });
  });

  describe('apiGET', () => {
    it('returns an array of cleaned filmData when given the string films', async () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve(mockFilmData)
        })
      }));

      const result = await apiGet('films');

      expect(result).toEqual(mockCleanFilmData);
    });

    it('returns an array of cleaned peopleData when given the string people', async () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve(mockPeopleData)
        })
      }));

      const result = await apiGet('people');

      expect(result).toEqual(mockCleanPeopleData);
    });

    it('returns an array of cleaned vehicleData when given the string vehicles', async () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve(mockVehicleData)
        })
      }));

      const result = await apiGet('vehicles');

      expect(result).toEqual(mockCleanVehicleData);
    });

    it('returns an array of cleaned planetData when given the string planets', async () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise ((resolve, reject) => {
          resolve(mockPlanetData)
        })
      }));

      const result = await apiGet('planets');

      expect(result).toEqual(mockCleanPlanetData);
    });

    it('getNameData - returns an array of names from the array of objects given to it', async () => {
      const mockUrlsArray = [
        "https://swapi.co/api/people/5/",
        "https://swapi.co/api/people/68/",
        "https://swapi.co/api/people/81/",
      ]

      const mockNamedResidentsArray = [
        undefined,
        undefined,
        undefined,
      ]

      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve(mockUrlsArray)
        })
      }));

      const result = await getNameData(mockUrlsArray);

      expect(result).toEqual(mockNamedResidentsArray);
    });
  });

  describe('DATA CLEANERS', () => {
    it('cleanFilmData - cleans the array of film data given to it', () => {
      const result = cleanFilmData(mockFilmData);

      expect(result).toEqual(mockCleanFilmData);
    });

    it('cleanPeopleData - cleans the array of people data given to it', async () => {
      const result = await cleanPeopleData(mockPeopleData);

      expect(result).toEqual(mockCleanPeopleData);
    });

    it('cleanVehicleData - cleans the array of vehicle data given to it', () => {
      const result = cleanVehicleData(mockVehicleData);

      expect(result).toEqual(mockCleanVehicleData);
    });

    it('cleanPlanetData - cleans the array of planet data given to it', async () => {
      const result = await cleanPlanetData(mockPlanetData);

      expect(result).toEqual(mockCleanPlanetData);
    });
  });
});