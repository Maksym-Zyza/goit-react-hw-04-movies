import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
// import HomePage from './views/HomePage';
// import MoviesPage from './views/MoviesPage';
// import MovieDetailsPage from './views/MovieDetailsPage';
import './styles.css';
import AppBar from './components/AppBar';
import routes from './routes';

// Чанкование - загрузка js частями:
const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-views" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "movie-views" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage' /* webpackChunkName: "movieDetalis-views" */
  ),
);

class App extends React.Component {
  render() {
    return (
      <>
        <AppBar />

        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route exact path={routes.movies} component={MoviesPage} />
            <Route path={routes.movieDetails} component={MovieDetailsPage} />
            <Route component={HomePage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
