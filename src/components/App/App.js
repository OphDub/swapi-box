import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import {apiGet} from '../helper/helper';

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

  getData = async (request) => {
    const data = await apiGet(request)

    this.setState({ [request]: data })
  }

  getRandomFilmData = async () => {
    const films = await apiGet('films');
    const randomNum = Math.floor(Math.random() * 7 + 1)

    this.setState({ film: films[randomNum] })
  }

  componentDidMount () {
    this.getRandomFilmData();
  }

  render() {
    return (
      <div className="app">
        <header>
          <h1 className="swapi-title">SWAPI BOX</h1>
          <button className="faves">
            <h3>
              View Favorites
            </h3>
            {this.state.favorites.length}
          </button>
        </header>
        <Nav  getData={this.getData} />
        <Main film={this.state.film}
              planets={this.state.planets}
              people={this.state.people}
              vehicles={this.state.vehicles}
              favorites={this.state.favorites} />
      </div>
    );
  }
}

export default App;
