const apiGet = async (request) => {
  const url = `https://swapi.co/api/${request}/`;
  const response = await fetchAndParse(url);

  switch(request) {
    case 'films':
      return await cleanFilmData(response);
    case 'people':
      return await cleanPeopleData(response);
    case 'planets':
      return await cleanPlanetData(response);
    case 'vehicles':
      return await cleanVehicleData(response);
    default:
      console.log('Error!');
      break;
  };
};

const fetchAndParse = async (url) => {
  const response = await fetch(url);

  if(response.status >= 400) {
    throw(new Error('Please wait fetching Star Wars facts'));
  } else {
    return await response.json();
  };
};

const cleanFilmData = (filmData) => {
  return filmData.results.map(film => {
    return {
      title: film.title,
      crawl: film.opening_crawl,
      releaseDate: film.release_date,
    };
  });
};

const getHomeworldData = async (url) => {
  const homeworldObj = await fetchAndParse(url);

  return {
    homeworld: homeworldObj.name,
    population: homeworldObj.population,
  };
};

const getNameData = (urls) => {
  const unresolvedPromises = urls.map(async (url) => {
    const obj = await fetchAndParse(url);

    return obj.name;
  })
  return Promise.all(unresolvedPromises);
}

const cleanPeopleData = (peopleData) => {
  const people = peopleData.results.map( async (person) => {
    const homeworld = await getHomeworldData(person.homeworld);
    const speciesTypes = await getNameData(person.species);

    return {
      name: person.name,
      ...homeworld,
      species: speciesTypes,
    };
  })
  return Promise.all(people);
};

const cleanVehicleData = (vehicleData) => {
  return vehicleData.results.map((vehicle) => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      passengers: vehicle.passengers,
      class: vehicle.vehicle_class,
    };
  })
};

const cleanPlanetData = (planetData) => {
  const planets = planetData.results.map( async (planet) => {
    const residents = await getNameData(planet.residents);

    return {
      name: planet.name,
      climate: planet.climate,
      terrain: planet.terrain,
      population: planet.population,
      residents: residents,
    };
  });

  return Promise.all(planets);
};

export {
  apiGet,
  fetchAndParse,
  cleanFilmData,
  cleanPeopleData,
  cleanVehicleData,
  cleanPlanetData,
};