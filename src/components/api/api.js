// import {
//   cleanFilmData,
//   cleanPeopleData,
//   cleanVehicleData,
//   cleanPlanetData
// } from '../helper/helper.js';

// const apiGet = async (request) => {
//   const url = `https://swapi.co/api/${request}/`
//   const response = await fetchAndParse(url)
//   let data

//   switch(request) {
//     case 'films':
//       data = await cleanFilmData(response)
//       break;
//     case 'people':
//       data = await cleanPeopleData(response)
//       break;
//     case 'planets':
//       data = await cleanPlanetData(response)
//       break;
//     case 'vehicles':
//       data = await cleanVehicleData(response)
//       break;
//     default:
//       console.log('Error!')
//   }
//   return data
// }

// const fetchAndParse = async (url) => {
//   const response = await fetch(url)

//   if(response.status >= 400) {
//     throw(new Error('Please wait fetching Star Wars facts'))
//   } else {
//     return await response.json()
//   }
// }

// export default apiGet