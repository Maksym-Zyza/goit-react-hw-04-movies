import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from './components/Loader/Loader';

// Чанкование - загрузка js частями:
const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "Home-page" */),
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName: "Movie-page" */),
);
const PersonsPage = lazy(() =>
  import('./pages/PersonsPage' /* webpackChunkName: "Pages-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage' /* webpackChunkName: "MovieDetalis-page" */
  ),
);
const PersonDetailsPage = lazy(() =>
  import(
    './pages/PersonDetailsPage' /* webpackChunkName: "PersonDetailsPage-page" */
  ),
);

export const Routes = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: HomePage,
    disabled: false,
  },
  {
    name: 'Movies',
    path: '/movies',
    exact: true,
    component: MoviesPage,
    disabled: false,
  },
  {
    name: 'Persons',
    path: '/persons',
    exact: true,
    component: PersonsPage,
    disabled: false,
  },
  {
    name: 'MovieDetails',
    path: '/movies/:movieId',
    exact: false,
    component: MovieDetailsPage,
    disabled: true,
  },
  {
    name: 'PersonDetails',
    path: '/persons/:personId',
    exact: false,
    component: PersonDetailsPage,
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
