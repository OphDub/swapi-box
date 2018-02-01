import {
  apiGet,
  fetchAndParse,
  cleanFilmData,
  cleanPeopleData,
  cleanVehicleData,
  cleanPlanetData,
  getPlanetResidents,
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
      }))

      fetchAndParse(expectedParams)

      expect(window.fetch).toHaveBeenCalledWith(expectedParams);
    })

    it('returns an object when status code is OK', () => {
      const mockRequest = `https://swapi.co/api/films/`

      expect(fetchAndParse(mockRequest)).resolves.toEqual(mockFilmData)
    })

    it('returns an error when status code is not OK', () => {
      const mockRequest = `https://swapi.co/api/films/`

      window.fetch = jest.fn().mockImplementation(() => ({
        status: 500,
      }))

      expect(fetchAndParse(mockRequest)).rejects.toEqual(Error('Please wait fetching Star Wars facts'))
    })
  })

  describe('apiGET', () => {
    it.skip('calls clean filmData when the string films is given to it', () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve(mockFilmData)
        })
      }))

      const result = apiGet('films')

      expect(result).toEqual(mockCleanFilmData);
    })

    it('returns cleanPeopleData when the string people is given to it', () => {
      const cleanPeopleData = jest.fn()
    })

    it.only('calls cleanVehicleData when the string vehicles is given to it', () => {
      const mockCall = jest.fn()

      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve(mockVehicleData)
        })
      }))

      apiGet(mockCall)

      expect(mockCall).toHaveBeenCalled()
    })

    it('calls cleanPlanetData when the string planets is given to it', () => {
      const cleanPlanetData = jest.fn()
    })
  })

  it('cleans the array of film data given to it', () => {
    const result = cleanFilmData(mockFilmData)

    expect(result).toEqual(mockCleanFilmData)
  })

  it.skip('cleans the array of people data given to it', () => {
    const result = cleanPeopleData(mockPeopleData)

    expect(result).toEqual(mockCleanPeopleData)
  })

  it('cleans the array of vehicle data given to it', () => {
    const result = cleanVehicleData(mockVehicleData)

    expect(result).toEqual(mockCleanVehicleData)
  })

  it.skip('cleans the array of planet data given to it', () => {
    const result = cleanPlanetData(mockPlanetData)

    expect(result).resolves.toEqual(mockCleanPlanetData)
  })

  it.skip('returns a residents array when status code is OK', () => {
    const mockUrls = [
      "https://swapi.co/api/people/5/",
      "https://swapi.co/api/people/68/",
      "https://swapi.co/api/people/81/"
    ]
    const mockResidents = [
      "Leia Organa",
      "Bail Prestor Organa",
      "Raymus Antilles"
    ]

    expect(getPlanetResidents(mockUrls)).resolves.toEqual(mockResidents)
  })
})