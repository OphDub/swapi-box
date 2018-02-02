import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import {apiGet} from '../helper/helper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film: [],
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
    const films = await this.getData('films')
    const randomNum = Math.floor(Math.random() * 7 + 1)

    this.setState({ films })
  }

  componentDidMount () {
    this.getRandomFilmData();
  }

  render() {
    return (
      <div className="app">
        <header>
          <h1>SWAPI BOX</h1>
        </header>
        <Nav  getData={this.getData} />
        <Main film={this.state.film}
              planets={this.state.planets}
              people={this.state.people}
              vehicles={this.state.vehicles} />
      </div>
    );
  }
}

export default App;
