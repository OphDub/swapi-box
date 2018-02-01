import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
// import Welcome from '../Welcome/Welcome';
// import People from '../People/People';
// import Planets from '../Planets/Planets';
// import Vehicles from '../Vehicles/Vehicles';
import {apiGet} from '../helper/helper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      planets: [],
      people: [],
      vehicles: [],
      favorites: [],
    }
  }

  getFilmData = async () => {
    const films = await apiGet('films')

    this.setState({ films })
  }

  getData = async (request) => {
    const data = await apiGet(request)

    this.setState({ [request]: data })
  }

  componentDidMount() {
    this.getFilmData()
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>SWAPI BOX</h1>
        </header>
        <Nav  getData={this.getData}/>
        {/* <Switch>
          <Route path="/" render={() => (<Welcome film={this.state.film[0]}/>)} />
          <Route path="/people" render={() => (<People />)} />
          <Route path="/planets" render={() => (<Planets />)} />
          <Route path="/vehicles" render={() => (<Vehicles />)} />
        </Switch> */}
        <Main film={this.state.films[0]}/>
      </div>
    );
  }
}

export default App;
