import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from '../Welcome/Welcome';
import Container from '../Container/Container';

const Main = ({ film, planets, people, vehicles }) => {
  return(
    <Switch>
      <Route exact path="/" render={() => (<Welcome film={film}/>)} />
      <Route path="/people" render={() =>
        (<Container type="people" data={people}/>)} />
      <Route path="/planets" render={() =>
        (<Container type="planets" data={planets}/>)} />
      <Route path="/vehicles" render={() =>
        (<Container type="vehicles" data={vehicles}/>)} />
    </Switch>
  )
}

export default Main;