import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import apiGet from '../api/api';

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
        <Main film={this.state.films[0]}/>
      </div>
    );
  }
}

export default App;
