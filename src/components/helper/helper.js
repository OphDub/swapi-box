export const cleanFilmData = (filmData) => {
  return filmData.results.map(film => {
    return {
      title: film.title,
      crawl: film.opening_crawl,
      releaseDate: film.release_date,
    }
  })
}

const getHomeworldData = async (url) => {
  const initialFetch = await fetch(url)
  const homeworldObj = await initialFetch.json()

  return {
    homeworld: homeworldObj.name,
    population: homeworldObj.population,
  }
}

const getSpeciesData = (urls) => {
  const unresolvedPromises = urls.map(async (url) => {
    const initialFetch = await fetch(url)
    const species = await initialFetch.json()

    return species.name
  })
  return Promise.all(unresolvedPromises);
}

export const cleanPeopleData = (peopleData) => {
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

export const cleanVehicleData = (vehicleData) => {
  return vehicleData.results.map((vehicle) => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      passengers: vehicle.passengers,
      vehicleClass: vehicle.vehicle_class,
    }
  })
}

export const getPlanetResidents = (urls) => {
  const unresolvedPromises = urls.map( async (url) => {
    const initialFetch = await fetch(url)
    const resident = await initialFetch.json()

    return resident.name
  })

  return Promise.all(unresolvedPromises)
}

export const cleanPlanetData = (planetData) => {
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