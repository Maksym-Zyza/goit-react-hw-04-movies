import { useState, useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import api from '../../api/movies-api';
import { text } from '../../helpers/text';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const movieId = window.location.pathname.split('/')[2];
    setIsLoading(true);

    api
      .getMoviesReviews(movieId)
      .then(response => {
        setReviews([...response.data.results]);
      })
      .catch(error => {
        console.log(error);
        return [];
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <div>
        <ul>
          {reviews.length > 0
            ? reviews.map(({ id, author, content }) => (
                <li key={id}>
                  <h3 className="data">{author}</h3>
                  <p className="text">{content}</p>
                </li>
              ))
            : text.NoReviews}
        </ul>
      </div>

      {isLoading && <Loader isLoading={isLoading} />}
    </>
  );
};

export default MovieReviews;
