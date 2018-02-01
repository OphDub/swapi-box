const apiGet = async (request) => {
  const url = `https://swapi.co/api/${request}/`
  const response = await fetchAndParse(url)
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
      console.log('Error!')
  }
  return data
}

const fetchAndParse = async (url) => {
  const response = await fetch(url)

  if(response.status >= 400) {
    throw(new Error('Please wait fetching Star Wars facts'))
  } else {
    return await response.json()
  }
}

const cleanFilmData = (filmData) => {
  return filmData.results.map(film => {
    return {
      title: film.title,
      crawl: film.opening_crawl,
      releaseDate: film.release_date,
    }
  })
}

const getHomeworldData = async (url) => {
  const homeworldObj = await fetchAndParse(url)

  return {
    homeworld: homeworldObj.name,
    population: homeworldObj.population,
  }
}

const getSpeciesData = (urls) => {
  const unresolvedPromises = urls.map(async (url) => {
    const species = await fetchAndParse(url)

    return species.name
  })
  return Promise.all(unresolvedPromises);
}

const cleanPeopleData = (peopleData) => {
  const people = peopleData.results.map( async (person) => {
    const homeworld = await getHomeworldData(person.homeworld)
    const speciesTypes = await getSpeciesData(person.species)

    return {
      name: person.name,
      ...homeworld,
      species: speciesTypes,
    }
  })
  return Promise.all(people);
}

const cleanVehicleData = (vehicleData) => {
  return vehicleData.results.map((vehicle) => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      passengers: vehicle.passengers,
      vehicleClass: vehicle.vehicle_class,
    }
  })
}

const getPlanetResidents = (urls) => {
  const unresolvedPromises = urls.map( async (url) => {
    const resident = await fetchAndParse(url)

    return resident.name
  })

  return Promise.all(unresolvedPromises)
}

const cleanPlanetData = (planetData) => {
  const planets = planetData.results.map( async (planet) => {
    const residents = await getPlanetResidents(planet.residents)

    return {
      name: planet.name,
      climate: planet.climate,
      terrain: planet.terrain,
      population: planet.population,
      residents: residents,
    }
  })

  return Promise.all(planets)
}

export {
  apiGet,
  fetchAndParse,
  cleanFilmData,
  cleanPeopleData,
  cleanVehicleData,
  cleanPlanetData,
}