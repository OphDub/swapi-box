import {
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

  it('returns a residents array when status code is OK', () => {
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