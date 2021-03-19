import React from 'react';
// import api from '../api/movies-api';
import axios from 'axios';

class Reviews extends React.Component {
  state = {};

  componentDidMount() {
    this.fetchReviews();
  }

  fetchReviews = () => {
    const { movieId } = this.props.match.params;
    console.log(movieId);

    // api.getMoviesReviews(movieId).then(results => {
    //   this.setState({ ...results });
    // });

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=523a15ded98cd05fab36993344058e43`,
      )
      .then(response => {
        this.setState({ ...response.data.results });
      })
      .catch(error => {
        console.log(error);
        return [];
      });
  };

  render() {
    const { author } = this.state;
    console.log(this.state);
    console.log(author);

    return (
      <div>
        <h2> Reviews page </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          maiores quia dolorum porro quidem officiis impedit molestias quaerat
          numquam nobis Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Magnam sequi tenetur laborum ab dolorem accusamus, autem perspiciatis
          rerum deserunt placeat dolor, impedit id nesciunt dignissimos
          laudantium, vitae iusto maxime? Nam.
        </p>
      </div>
    );
  }
}

export default Reviews;
