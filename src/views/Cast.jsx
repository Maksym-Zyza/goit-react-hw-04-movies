import React from 'react';
import api from '../api/movies-api';

class Cast extends React.Component {
  state = {};

  componentDidMount() {
    this.fetchCredits();
  }

  fetchCredits = () => {
    const { movieId } = this.props.match.params;
    console.log(movieId);

    api.getMovieCredits(movieId).then(cast => {
      this.setState({ ...cast });
    });
  };

  render() {
    console.log(this.state);

    return (
      <div>
        <h2> Cast page </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          maiores quia dolorum porro quidem officiis impedit molestias quaerat
          numquam nobis
        </p>
      </div>
    );
  }
}

export default Cast;
