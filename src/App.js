/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import {
  BrowerRouter as Router,
  Route,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie';

class App extends Component {
  state = {
    movies: [],
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=0423ed58e5855d234d54dd1e3efd26eb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();
      this.setState({
        movies: movies.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Route path="/test" component={Test} />
          {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
        </div>
      </Router>
    );
  }
}


export default App;

const Test = () => 
<div>
  <h1>Test</h1>
</div>