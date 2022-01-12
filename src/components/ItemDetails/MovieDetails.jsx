import { useState, useEffect } from 'react';
import st from './Details.module.scss';
import api from '../../api/movies-api';

export default function MovieDetails() {
  const [src] = useState('https://image.tmdb.org/t/p/w500');
  const [movies, setMovies] = useState({});

  useEffect(() => {
    const movieId = window.location.pathname.split('/').pop();
    api.getMovieDetails(movieId).then(result => {
      setMovies({ ...result });
    });
  }, []);

  return (
    <div className={st.details}>
      <h2>{movies.original_title}</h2>
      {movies?.poster_path && (
        <img src={`${src}${movies.poster_path}`} alt={movies.original_title} />
      )}

      <div>
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
  );
}
