import { useState, useEffect } from 'react';
import st from './MovieDetails.module.scss';
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
    <div>
      <h2 className={st.title}>{movies.original_title}</h2>
      {movies?.poster_path && (
        <img
          className={st.img}
          src={`${src}${movies.poster_path}`}
          alt={movies.original_title}
        />
      )}

      <div className={st.info}>
        <p className={st.text}>
          Release: <span className={st.data}>{movies.release_date}</span>
        </p>
        <h3>Overview </h3>
        <span className={st.text}>{movies.overview}</span>
        <p className={st.text}>
          Popularity:{' '}
          <span className={st.data}>
            {String(Math.round(movies.popularity))}
          </span>
        </p>
        <p className={st.text}>
          Rating: <span className={st.data}>{movies.vote_average}</span>
        </p>
        <p className={st.text}>
          Count: <span className={st.data}>{movies.vote_count}</span>
        </p>
        <h3 className={st.text}>Genres</h3>
        {movies.genres
          ? movies.genres.map(({ id, name }) => (
              <p key={id} className={st.data}>
                {name}
              </p>
            ))
          : `We don't have any ganres for this movie.`}
      </div>
    </div>
  );
}
