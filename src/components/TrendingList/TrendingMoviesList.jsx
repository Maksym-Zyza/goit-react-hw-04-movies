import { useState } from 'react';
import { Link, useLocation, withRouter } from 'react-router-dom';
import defaultImg from '../../img/default.jpg';

const TrendingMoviesList = ({ trending, time }) => {
  const [src] = useState('https://image.tmdb.org/t/p/w500');
  const location = useLocation();
  const title =
    time === 'day' ? 'Today trending movies' : 'Trending movies of the week';

  return (
    <div>
      <h2 className="pageTitle">{title}</h2>

      <ul className="moviesList">
        {trending.map(({ id, poster_path, title, vote_average }) => (
          <Link
            key={id}
            to={{
              pathname: `/movies/${id}`,
              state: { from: location.pathname },
            }}
          >
            <li>
              {poster_path ? (
                <img src={`${src}${poster_path}`} alt="Movie poster" />
              ) : (
                <img src={defaultImg} alt="Was not found" />
              )}
              <h4> {title}</h4>
              <div>
                <span>{vote_average}</span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default withRouter(TrendingMoviesList);
