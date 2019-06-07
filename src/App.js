/* eslint react/no-did-mount-set-state: 0 */
// ('https://api.themoviedb.org/3/discover/movie?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
//Switch is like the if function
//the route checkes if the path exist or not 
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import MoviesList from './MoviesList';
import MoviesDetail from './MovieDetail';


const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
      <Link to ="/">
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MoviesDetail} />
      </Switch>
    </div>
  </Router>
);

export default App;

const Test = ({match}) => (
  <h1>{match.params.id}</h1>
);
