import {
  cleanFilmData,
  cleanPeopleData,
  cleanVehicleData,
  cleanPlanetData
} from '../helper/helper.js';

const apiGet = async (request) => {
  const url = `https://swapi.co/api/${request}/`
  const initialFetch = await fetch(url)
  const response = await initialFetch.json()
  let data

  switch(request) {
    case 'films':
      data = await cleanFilmData(response)
      break;
    case 'people':
      data = await cleanPeopleData(response)
      break;
    case 'planets':
      data = await cleanPlanetData(response)
      break;
    case 'vehicles':
      data = await cleanVehicleData(response)
      break;
    default:
      //Error goes here
  }
  return data
}

export default apiGet;