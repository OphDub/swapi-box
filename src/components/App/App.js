import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import {
  getFilmsData,
  getPeopleData,
  getPlanetsData,
  getVehiclesData,
} from '../helper/helper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film: {},
      planets: [],
      people: [],
      vehicles: [],
      favorites: [],
    }
  }

  getRandomFilmData = async () => {
    const films = await getFilmsData()
    const randomNum = Math.floor(Math.random() * 7 + 1)

    this.setState({ film: films[randomNum] })
  }

  handlePeopleData = async () => {
    const people = await getPeopleData();

    this.setState({ people })
  }

  handlePlanetData = async () => {
    const planets = await getPlanetsData();

    this.setState({ planets })
  }

  handleVehicleData = async () => {
    const vehicles = await getVehiclesData();

    this.setState({ vehicles })
  }

  componentDidMount() {
    this.getRandomFilmData()
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>SWAPI BOX</h1>
        </header>
        <Nav  handlePeopleData={this.handlePeopleData}
              handlePlanetsData={this.handlePlanetData}
              handleVehiclesData={this.handleVehicleData} />
        <Main film={this.state.film}
              planets={this.state.planets}
              people={this.state.people}
              vehicles={this.state.vehicles} />
      </div>
    );
  }
}

export default App;
