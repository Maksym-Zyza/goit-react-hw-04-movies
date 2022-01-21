import { useLocation, useHistory } from 'react-router-dom';
import TvShowsDetails from '../components/ItemDetails/TvShowsDetails';
import { text } from '../helpers/text';

export default function TvShowsDetailsPage() {
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

      <TvShowsDetails />
    </div>
  );
}
