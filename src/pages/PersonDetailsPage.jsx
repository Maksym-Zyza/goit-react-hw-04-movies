import { useLocation, useHistory } from 'react-router-dom';
import PersonDetails from '../components/ItemDetails/PersonDetails';
import { text } from '../helpers/text';

export default function PersonDetailsPage() {
  const location = useLocation();
  const history = useHistory();

  const hendleGoBack = () => {
    history.push(location?.state?.from || history.push('/persons'));
  };

  return (
    <div className="container position">
      <button className="movieBtn" type="button" onClick={hendleGoBack}>
        &#9668; {text.Back}
      </button>

      <PersonDetails />
    </div>
  );
}
