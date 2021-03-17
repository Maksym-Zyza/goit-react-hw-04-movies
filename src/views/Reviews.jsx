import React from 'react';
import api from '../api/movies-api';

class Reviews extends React.Component {
  state = {};

  componentDidMount() {
    this.fetchReviews();
  }

  fetchReviews = () => {
    const { movieId } = this.props.match.params;
    console.log(movieId);

    api.getMoviesReviews(movieId).then(results => {
      this.setState({ ...results });
    });
  };

  render() {
    console.log(this.state);
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
