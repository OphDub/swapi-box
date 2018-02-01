import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import {
  cleanFilmData,
  cleanPeopleData,
  cleanVehicleData,
  cleanPlanetData
} from '../helper/helper';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      planets: [],
      people: [],
      vehicles: []
    }
  }

  getFilmData = async (url) => {
    const initialFetch = await fetch(url)
    const uncleanedFilms = await initialFetch.json()
    const films = cleanFilmData(uncleanedFilms)

    this.setState({ films })
  }

  getData = async (request) => {
    const url = `https://swapi.co/api/${request}/`
    const response = await fetch(url)
    const result = await response.json()
    let data

    switch(request) {
      case 'people':
        data = await cleanPeopleData(result)
        break;
      case 'planets':
        data = await cleanPlanetData(result)
        break;
      case 'vehicles':
        data = await cleanVehicleData(result)
        break;
    }

    this.setState({ [request]: data })
  }

  componentDidMount() {
    const request = 'films'
    const url = `https://swapi.co/api/${request}/`

    this.getFilmData(url)
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>SWAPI BOX</h1>
        </header>
        <Nav getData={this.getData}/>
        <Main />
      </div>
    );
  }
}

export default App;
