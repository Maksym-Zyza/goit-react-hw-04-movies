import { useState, useEffect } from 'react';
import st from './Details.module.scss';
import api from '../../api/movies-api';
import defaultImg from '../../img/default.jpg';
import Loader from '../Loader/Loader';
import { text } from '../../helpers/text';

export default function TvShowsDetails() {
  const [src] = useState('https://image.tmdb.org/t/p/w500');
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const id = window.location.pathname.split('/').pop();
    setIsLoading(true);

    api
      .getTvDetails(id)
      .then(result => {
        setMovies({ ...result });
      })
      .catch(error => {
        console.log(error);
        return [];
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {movies ? (
        <div className={st.details}>
          <h2>{movies.name}</h2>
          {movies?.poster_path ? (
            <img src={`${src}${movies?.poster_path}`} alt="Poster poster" />
          ) : (
            <img src={defaultImg} alt="Was not found" />
          )}

          <div className={st.details}>
            <p>
              First air date: <span>{movies.first_air_date}</span>
            </p>
            <h3>{text.Overview}: </h3>
            <span>{movies.overview}</span>
            <p>
              {text.Popularity}:{' '}
              <span>{String(Math.round(movies.popularity))}</span>
            </p>
            <p>
              {text.Rating}: <span>{movies.vote_average}</span>
            </p>
            <p>
              {text.Count}: <span>{movies.vote_count}</span>
            </p>
            <h3>{text.Genres}:</h3>
            {movies.genres
              ? movies.genres.map(({ id, name }) => <p key={id}>{name}</p>)
              : `We don't have any ganres for this TV Shows.`}

            <h3>{text.Poster}</h3>
            <img src={`${src}${movies?.backdrop_path}`} alt="Poster" />
          </div>
        </div>
      ) : (
        <Loader isLoading={isLoading} />
      )}
    </>
  );
}
