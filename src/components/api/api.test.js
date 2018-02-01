import api from './api';
import mockData from '../mock-data';

describe('API', () => {
  it('calls fetch with the correct params', () => {
    const mockPerson = mockData.mockPeopleData.results[0]
    const mockPersonArray = [
      mockPerson
    ]
    const expectedRequest = 'people'


    const expectedParams = [
      `https://swapi.co/api/${expectedRequest}/`,
      body: JSON.stringify({})
    ]
  })

  it('returns an object if the status code is OK', () => {

  })

  it('returns an error if the status code is not OK', () => {

  })
})