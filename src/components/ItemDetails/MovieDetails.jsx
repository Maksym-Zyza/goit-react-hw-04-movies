import { useState, useEffect } from 'react';
import st from './Details.module.scss';
import api from '../../api/movies-api';
import { text } from '../../helpers/text';
import defaultImg from '../../img/default.jpg';
import Loader from '../../components/Loader/Loader';
import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews';
import { ReactComponent as Play } from '../Icons/Play.svg';
import Modal from '../Modal/Modal';
import MovieVideo from './MovieVideo';

export default function MovieDetails() {
  const [src] = useState('https://image.tmdb.org/t/p/w500');
  const [movies, setMovies] = useState(null);
  const [video, setVideo] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    !showModal
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
    setShowModal(!showModal);
  };

  const getMovieDetails = () => {
    setIsLoading(true);
    const movieId = window.location.pathname.split('/').pop();
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
  };

  const getVideo = () => {
    api
      .getMovieVideo(movies.id)
      .then(result => {
        setVideo(result.results[0]);
      })
      .catch(error => {
        console.log(error);
        return [];
      })
      .finally(() => setIsLoading(false));
  };

  const handleShowCast = () => {
    setShowCast(true);
    setShowReviews(false);
  };
  const handleShowReviews = () => {
    setShowReviews(true);
    setShowCast(false);
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  useEffect(() => {
    movies && getVideo();
  }, [movies]);

  return (
    <>
      {movies ? (
        <div className={st.details}>
          <h2>{movies.title}</h2>
          <div onClick={toggleModal} className={st.imgHover}>
            {movies?.poster_path ? (
              <img src={`${src}${movies?.poster_path}`} alt="Movies poster" />
            ) : (
              <img src={defaultImg} alt="Was not found" />
            )}

            <div className={st.btnPlay}>
              <Play />
            </div>

            {showModal && (
              <Modal onClose={toggleModal}>
                {video ? (
                  <MovieVideo videoKey={video.key} />
                ) : (
                  <div className={st.noVideo}>{text.noVideo}</div>
                )}
              </Modal>
            )}
          </div>

          <div className={st.movieDetails}>
            <p>
              {text.Release}: <span>{movies.release_date}</span>
            </p>
            <h3>{text.Overview}: </h3>
            <span>{movies.overview}</span>
            <p>
              {text.Popularity}:
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
              : `We don't have any genres for this movie.`}
          </div>
        </div>
      ) : (
        <Loader isLoading={isLoading} />
      )}

      <button className={st.link} onClick={handleShowCast}>
        {text.Cast} <span className={st.linkSign}>&#9660;</span>
      </button>
      <button className={st.link} onClick={handleShowReviews}>
        {text.Reviews} <span className={st.linkSign}>&#9660;</span>
      </button>

      {/* <div className={st.details}>
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=Anp4SdWoyqM"
        />
      </div> */}

      {showCast && <MovieCast />}

      {showReviews && <MovieReviews />}
    </>
  );
}
