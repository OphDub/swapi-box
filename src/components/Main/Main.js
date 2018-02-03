import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from '../Welcome/Welcome';
import Container from '../Container/Container';
import { object, arrayOf, shape, string, number } from 'prop-types';

const Main = ({ film, planets, people, vehicles, favorites }) => {
  return (
    <Switch>
      <Route exact path="/" render={() => (<Welcome film={film}/>)} />
      <Route path="/people" render={() =>
        (<Container type="people" data={people}/>)} />
      <Route path="/planets" render={() =>
        (<Container type="planets" data={planets}/>)} />
      <Route path="/vehicles" render={() =>
        (<Container type="vehicles" data={vehicles}/>)} />
    </Switch>
  );
};

const planet = shape({
  name: string.isRequired,
  climate: string.isRequired,
  terrain: string.isRequired,
  population: number.isRequired,
  residents: arrayOf(string.isRequired),
});

const person = shape({
  name: string.isRequired,
  homeworld: string.isRequired,
  population: number.isRequired,
  species: arrayOf(string.isRequired),
});

const vehicle = shape({
  name: string.isRequired,
  model: string.isRequired,
  passengers: number.isRequired,
  class: string.isRequired,
});

Main.propTypes = {
  film: object.isRequired,
  planets: arrayOf(planet),
  people: arrayOf(person),
  vehicles: arrayOf(vehicle),
};

export default Main;