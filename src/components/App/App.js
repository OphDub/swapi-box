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
    if (!localStorage[request]) {
      const data = await apiGet(request);
      this.setState({ [request]: data });
      await localStorage.setItem(request, JSON.stringify(data));
    }

    const data = JSON.parse(localStorage.getItem(request));
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

  async componentDidMount () {
    await this.getRandomFilmData();
  }

  render() {
    return (
      <div className="app">
        <header className="swapi-header">
          <NavLink to="/" className="swapi-title-navlink">
            <h1 className="swapi-title">
              SWAPI
              B<span><img className="swapi-logo" src="http://www.iconsplace.com/download/white-death-star-256.ico" alt="death star logo"/></span>X
            </h1>
          </NavLink>
          <NavLink to="/favorites">
            <button className="faves">
              <h4 className="faves-header">Favorites</h4>
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
