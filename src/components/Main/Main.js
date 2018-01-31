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
        <Route path="/people" component={People} />
        <Route path="/planets" component={Planets} />
        <Route path="/vehicles" component={Vehicles} />
      </Switch>
    </main>

  )
}

export default Main;