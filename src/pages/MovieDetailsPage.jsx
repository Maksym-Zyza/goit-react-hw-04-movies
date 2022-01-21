import { useLocation, useHistory } from 'react-router-dom';
import MovieDetails from '../components/ItemDetails/MovieDetails';
import { text } from '../helpers/text';

export default function MovieDetailsPage() {
  const location = useLocation();
  const history = useHistory();

  const hendleGoBack = () => {
    history.push(location?.state?.from || history.push('/'));
  };

  return (
    <div className="container position">
      <button className="movieBtn" type="button" onClick={hendleGoBack}>
        &#9668; {text.Back}
      </button>

      <MovieDetails />
    </div>
  );
}
