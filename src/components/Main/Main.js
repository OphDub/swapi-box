import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from '../Welcome/Welcome';
import '../Welcome/Welcome.scss';
import CardContainer from '../CardContainer/CardContainer';
import '../CardContainer/CardContainer';
import { object, arrayOf, shape, string, number, func } from 'prop-types';

const Main = ({ film, planets, people, vehicles, saveFavorite, favorites }) => {
  return (
    <Switch>
      <Route exact path="/" render={() => (<Welcome film={film}/>)} />
      <Route path="/people" render={() =>
        (<CardContainer type="people"
                        data={people}
                        saveFavorite={saveFavorite}/>)} />
      <Route path="/planets" render={() =>
        (<CardContainer type="planets"
                        data={planets}
                        saveFavorite={saveFavorite}/>)} />
      <Route path="/vehicles" render={() =>
        (<CardContainer type="vehicles"
                        data={vehicles}
                        saveFavorite={saveFavorite}/>)} />
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
  passengers: string.isRequired,
  class: string.isRequired,
});

Main.propTypes = {
  film: object.isRequired,
  planets: arrayOf(planet).isRequired,
  people: arrayOf(person).isRequired,
  vehicles: arrayOf(vehicle).isRequired,
  saveFavorite: func.isRequired,
};

export default Main;