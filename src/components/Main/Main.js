import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from '../Welcome/Welcome';
import People from '../People/People';
import Planets from '../Planets/Planets';
import Vehicles from '../Vehicles/Vehicles';

const Main = () => {
  return(
    <main>
      <Switch>
        <Route exact path="/" render={() => (<Welcome />)} />
        <Route path="/people" render={() => (<People />)} />
        <Route path="/planets" render={() => (<Planets />)} />
        <Route path="/vehicles" render={() => (<Vehicles />)} />
      </Switch>
    </main>

  )
}

export default Main;