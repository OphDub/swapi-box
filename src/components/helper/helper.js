export const cleanFilmData = (filmData) => {
  return filmData.results.map(film => {
    return {
      title: film.title,
      opening_crawl: film.opening_crawl,
      release_date: film.release_date
    }
  })
}

const getHomeworldData = async (url) => {
  const initialFetch = await fetch(url)
  const homeworldObj = await initialFetch.json()

  return {
    homeworld: homeworldObj.name,
    population: homeworldObj.population
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

    const thing = {
      name: person.name,
      ...homeworld,
      species: speciesTypes
    }

    return thing;
  })

  return Promise.all(people);
}