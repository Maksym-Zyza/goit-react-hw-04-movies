import { useState, useEffect } from 'react';
import st from './Details.module.scss';
import api from '../../api/movies-api';
import defaultImg from '../../img/default.jpg';
import Loader from '../../components/Loader/Loader';
import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews';

export default function MovieDetails() {
  const [src] = useState('https://image.tmdb.org/t/p/w500');
  const [movies, setMovies] = useState(null);
  const [showCast, setShowCast] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const toogleShowCast = () => {
    setShowCast(!showCast);
  };

  useEffect(() => {
    const movieId = window.location.pathname.split('/').pop();
    setIsLoading(true);

    api
      .getMovieDetails(movieId)
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
          <h2>{movies.original_title}</h2>
          {movies?.poster_path ? (
            <img src={`${src}${movies?.poster_path}`} alt="Movies poster" />
          ) : (
            <img src={defaultImg} alt="Was not found" />
          )}

          <div className={st.details}>
            <p>
              Release: <span>{movies.release_date}</span>
            </p>
            <h3>Overview </h3>
            <span>{movies.overview}</span>
            <p>
              Popularity: <span>{String(Math.round(movies.popularity))}</span>
            </p>
            <p>
              Rating: <span>{movies.vote_average}</span>
            </p>
            <p>
              Count: <span>{movies.vote_count}</span>
            </p>
            <h3>Genres</h3>
            {movies.genres
              ? movies.genres.map(({ id, name }) => <p key={id}>{name}</p>)
              : `We don't have any ganres for this movie.`}
          </div>
        </div>
      ) : (
        <Loader isLoading={isLoading} />
      )}

      <button className={st.link} onClick={toogleShowCast}>
        Cast{' '}
        <span className={st.linkSign}>
          {showCast ? <span>&#9660;</span> : <span>&#9650;</span>}
        </span>
      </button>
      <button className={st.link} onClick={toogleShowCast}>
        Reviews{' '}
        <span className={st.linkSign}>
          {!showCast ? <span>&#9660;</span> : <span>&#9650;</span>}
        </span>
      </button>

      {showCast && <MovieCast />}

      {!showCast && <MovieReviews />}
    </>
  );
}
