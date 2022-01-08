import {
  Route,
  Switch,
  useRouteMatch,
  useLocation,
  useHistory,
} from 'react-router-dom';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import Navigetion from '../components/Navigetion/Navigetion';
import Reviews from './Reviews';
import routes from '../routes';
import Cast from './Cast';

export default function MovieDetailsPage() {
  const match = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  const hendleGoBack = () => {
    history.push(location?.state?.from || history.push(routes.home));
  };

  return (
    <div className="container position">
      <button className="movieBtn" type="button" onClick={hendleGoBack}>
        &#9668; Back
      </button>

      <MovieDetails />

      <Navigetion.NavMovieDetails match={match} />

      <Switch>
        <Route path={`${match.path}/cast`} component={Cast} />
        <Route path={`${match.path}/reviews`} component={Reviews} />
      </Switch>
    </div>
  );
}
