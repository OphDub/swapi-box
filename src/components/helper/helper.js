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
  // console.log('homeworld', url)
  const initialFetch = await fetch(url)
  const homeworld = await initialFetch.json()
  // console.log('homeworld', homeworld)
  return { homeworld: homeworld.name, population: homeworld.population }
}

const getSpeciesData = (urls) => {
  // console.log('species', urls)
  const unresolvedPromises = urls.map(async (url) => {
    const initialFetch = await fetch(url)
    const species = await initialFetch.json()
    // console.log('species', species)
    return {species: species.name}
  })

  return Promise.all(unresolvedPromises);
}

export const cleanPeopleData = (peopleData) => {
  return peopleData.results.map((person) => {
    const homeworld = getHomeworldData(person.homeworld)
    const speciesTypes = getSpeciesData(person.species)

    return {
      name: person.name,
      ...homeworld,
      species: [speciesTypes]
    }
  })
}