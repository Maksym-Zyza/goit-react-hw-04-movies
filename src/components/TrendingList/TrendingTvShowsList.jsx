import { useState } from 'react';
import { Link, useLocation, withRouter } from 'react-router-dom';
import defaultImg from '../../img/default.jpg';

const TrendingTvShows = ({ trending, time }) => {
  const [src] = useState('https://image.tmdb.org/t/p/w500');
  const location = useLocation();
  const title =
    time === 'day'
      ? 'Today trending TV shows'
      : 'Trending TV shows of the week';

  return (
    <div>
      <h2 className="pageTitle">{title}</h2>

      <ul className="moviesList">
        {trending.map(({ id, name, poster_path, vote_average }) => (
          <Link
            key={id}
            to={{
              pathname: `/tvShows/${id}`,
              state: { from: location.pathname },
            }}
          >
            <li>
              {poster_path ? (
                <img src={`${src}${poster_path}`} alt="TvShows poster" />
              ) : (
                <img src={defaultImg} alt="Was not found" />
              )}
              <h4> {name}</h4>
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

export default withRouter(TrendingTvShows);
