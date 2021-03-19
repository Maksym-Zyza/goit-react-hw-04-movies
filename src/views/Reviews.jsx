import React from 'react';
// import api from '../api/movies-api';
import axios from 'axios';

class Reviews extends React.Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    this.fetchReviews();
  }

  fetchReviews = () => {
    const { movieId } = this.props.match.params;
    // api.getMoviesReviews(movieId).then(results => {
    //   this.setState({ ...results });
    // });

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=523a15ded98cd05fab36993344058e43`,
      )
      .then(response => {
        this.setState({ reviews: [...response.data.results] });
      })
      .catch(error => {
        console.log(error);
        return [];
      });
  };

  render() {
    const { reviews } = this.state;

    return (
      <div>
        <ul>
          {reviews.length > 0
            ? reviews.map(({ id, author, content }) => (
                <li key={id}>
                  <h3 className="data">{author}</h3>
                  <p className="text">{content}</p>
                </li>
              ))
            : `We don't have any reviews for this movie.`}
        </ul>
      </div>
    );
  }
}

export default Reviews;
