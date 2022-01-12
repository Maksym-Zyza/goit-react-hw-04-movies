import {
  // Route,
  // Switch,
  // useRouteMatch,
  useLocation,
  useHistory,
} from 'react-router-dom';
import PersonDetails from '../components/ItemDetails/PersonDetails';
// import Navigetion from '../components/Navigetion/Navigetion';
// import Reviews from './Reviews';
// import Cast from './Cast';

export default function PersonDetailsPage() {
  // const match = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  const hendleGoBack = () => {
    const prevLocation = location?.state?.from.replace(`/cast`, '');
    history.push(prevLocation || history.push('/persons'));

    console.log('location?.state?.from>>', location?.state?.from);
    console.log('prevLocation>>', prevLocation);
    console.log('history>>', history);
  };

  return (
    <div className="container position">
      <button className="movieBtn" type="button" onClick={hendleGoBack}>
        &#9668; Back
      </button>

      <PersonDetails />

      {/* <Navigetion.NavMovieDetails match={match} />

      <Switch>
        <Route path={`${match.path}/cast`} component={Cast} />
        <Route path={`${match.path}/reviews`} component={Reviews} />
      </Switch> */}
    </div>
  );
}
