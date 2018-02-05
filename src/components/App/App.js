import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
    };
  }

  getData = async (request) => {
    //if data at request is already in state do nothing
    //otherwise call apiGet and setState
    const data = await apiGet(request);

    this.setState({ [request]: data });
  }

  getRandomFilmData = async () => {
    const films = await apiGet('films');
    const randomNum = Math.floor(Math.random() * films.length);

    this.setState({ film: films[randomNum] });
  }

  saveFavorite = (element) => {
    element.favorited === false ?
      element.favorited = true :
      element.favorited = false;

    const { favorites } = this.state;
    const noDupes = favorites.filter(favorite =>
      favorite.name !== element.name
    );
    const newFaves = favorites.includes(element)  ? noDupes
      : [...noDupes, element];

    this.setState({ favorites: newFaves });
  }

  componentDidMount () {
    this.getRandomFilmData();
  }

  render() {
    return (
      <div className="app">
        <header>
          <h1 className="swapi-title">SWAPI BOX</h1>
          <NavLink to="/favorites">
            <button className="faves">
                Favorites
              <div className="fave-count">
                {this.state.favorites.length}
              </div>
            </button>
          </NavLink>
        </header>
        <Nav  getData={this.getData} />
        <Main film={this.state.film}
          planets={this.state.planets}
          people={this.state.people}
          vehicles={this.state.vehicles}
          saveFavorite={this.saveFavorite}
          favorites={this.state.favorites} />
      </div>
    );
  }
}

export default App;
