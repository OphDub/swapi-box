import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import {
  cleanFilmData,
  cleanPeopleData
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
    const thing = await fetch(url)
    const response = await thing.json()
    const people = await cleanPeopleData(response)

    this.setState({ people })
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
