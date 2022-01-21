import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import { text } from './helpers/text';

// Чанкование - загрузка js частями:
const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "HomePage" */),
);
const InTheatresPage = lazy(() =>
  import('./pages/InTheatresPage' /* webpackChunkName: "InTheatresPage" */),
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);
const PersonsPage = lazy(() =>
  import('./pages/PersonsPage' /* webpackChunkName: "PersonsPage" */),
);
const TvShowsPage = lazy(() =>
  import('./pages/TvShowsPage' /* webpackChunkName: "TvShowsPage" */),
);
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */),
);
const PersonDetailsPage = lazy(() =>
  import(
    './pages/PersonDetailsPage' /* webpackChunkName: "PersonDetailsPage" */
  ),
);
const TvShowsDetailsPage = lazy(() =>
  import(
    './pages/TvShowsDetailsPage' /* webpackChunkName: "TvShowsDetailsPage" */
  ),
);

export const Routes = [
  {
    name: text.Home,
    path: '/',
    exact: true,
    component: HomePage,
    disabled: false,
  },
  {
    name: text.InTheatres,
    path: '/inTheatres',
    exact: true,
    component: InTheatresPage,
    disabled: false,
  },
  {
    name: text.SearchMovies,
    path: '/searchMovies',
    exact: true,
    component: MoviesPage,
    disabled: false,
  },
  {
    name: text.Persons,
    path: '/persons',
    exact: true,
    component: PersonsPage,
    disabled: false,
  },
  {
    name: text.TvShows,
    path: '/tvShows',
    exact: true,
    component: TvShowsPage,
    disabled: false,
  },
  {
    name: text.MovieDetails,
    path: '/movies/:movieId',
    exact: false,
    component: MovieDetailsPage,
    disabled: true,
  },
  {
    name: text.PersonDetails,
    path: '/persons/:personId',
    exact: false,
    component: PersonDetailsPage,
    disabled: true,
  },
  {
    name: text.TvShowsDetails,
    path: '/tvShows/:tvShowsId',
    exact: false,
    component: TvShowsDetailsPage,
    disabled: true,
  },
];

export const LazyRoutes = () => {
  return (
    <div>
      <Suspense fallback={<Loader isLoading={true} />}>
        <Switch>
          {Routes.map(route => (
            <Route
              key={route.name}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ))}
          <Route component={HomePage} />
        </Switch>
      </Suspense>
    </div>
  );
};
