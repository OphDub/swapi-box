import {cleanFilmData, cleanPeopleData} from './helper.js';
import {
  mockFilmData,
  mockCleanFilmData,
  mockPeopleData,
  mockCleanPeopleData,
  mockPlanetData,
  // mockCleanPlanetData,
  mockVehicleData,
  // mockCleanVehicleData
} from '../mock-data';

describe('HELPER', () => {
  it('makes a clean array of film data given to it', () => {
    const result = cleanFilmData(mockFilmData)

    expect(result).toEqual(mockCleanFilmData)
  })

  it.skip('makes a clean array of people data given to it', () => {
    // const result = fetch(`https://swapi.co/api/people/`)
    //   .then(response => response.json())
    //   .then(result => cleanPeopleData(result))
    const result = cleanPeopleData(mockPeopleData)

    expect(result).toEqual(mockCleanPeopleData)
  })
})