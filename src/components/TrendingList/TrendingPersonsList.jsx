import { useState } from 'react';
import { Link, useLocation, withRouter } from 'react-router-dom';
import { text } from '../../helpers/text';
import defaultImg from '../../img/default.jpg';

const TrendingPersonsList = ({ trending, time }) => {
  const [src] = useState('https://image.tmdb.org/t/p/w500');
  const location = useLocation();
  const title = time === 'day' ? text.TitlePersons : text.WeekPersons;

  return (
    <div>
      <h2 className="pageTitle">{title}</h2>

      <ul className="moviesList">
        {trending.map(({ id, name, profile_path, popularity }) => (
          <Link
            key={id}
            to={{
              pathname: `/persons/${id}`,
              state: { from: location.pathname },
            }}
          >
            <li>
              {profile_path ? (
                <img src={`${src}${profile_path}`} alt="Movie poster" />
              ) : (
                <img src={defaultImg} alt="Was not found" />
              )}
              <h4> {name}</h4>
              <div>{popularity && <span>{Math.round(popularity)}</span>}</div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default withRouter(TrendingPersonsList);
