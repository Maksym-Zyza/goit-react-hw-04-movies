import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
// import NotFoundViev from './views/NotFoundViev';
import './styles.css';

class App extends React.Component {
  // state = {
  //   query: '',
  //   page: 1,
  //   details: [],
  //   credits: [],
  //   reviews: [],
  //   error: null,
  // };

  render() {
    return (
      <>
        <div className="NavDiv">
          <NavLink
            exact
            to="/"
            className="NavLink"
            activeClassName="NavLink-active"
          >
            Home
          </NavLink>

          <NavLink
            to="/movies"
            className="NavLink"
            activeClassName="NavLink-active"
          >
            Movies
          </NavLink>

          <a href="https://www.themoviedb.org/">
            <img
              className="nav_img"
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="img themoviedb.org"
            />
          </a>
        </div>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route component={HomePage} />
        </Switch>
      </>
    );
  }
}

export default App;
