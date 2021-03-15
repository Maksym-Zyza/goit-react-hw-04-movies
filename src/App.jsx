import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import Cast from './views/Cast';
import Reviews from './views/Reviews';
import NotFoundViev from './views/NotFoundViev';
import './styles.css';

function App() {
  return (
    <>
      <h1>Navigation:</h1>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            className="NavLink"
            activeClassName="NavLink-active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className="NavLink"
            activeClassName="NavLink-active"
          >
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies/:movieId"
            className="NavLink"
            activeClassName="NavLink-active"
          >
            Movie details
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies/:movieId/cast"
            className="NavLink"
            activeClassName="NavLink-active"
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies/:movieId/reviews"
            className="NavLink"
            activeClassName="NavLink-active"
          >
            Reviews
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies/:movieId/cast" component={Cast} />
        <Route path="movies/:movieId/reviews" component={Reviews} />
        <Route component={NotFoundViev} />
      </Switch>
    </>
  );
}

export default App;

// http://localhost:3000/
// http://localhost:3000/autors
// http://localhost:3000/books
// exact - точное совпадение
