import React from 'react';
import api from '../api/movies-api';
import CastInfo from '../components/CastInfo/CastInfo';
import Loader from '../components/Loader/Loader';

class Cast extends React.Component {
  state = {
    isLoading: false,
    cast: [],
  };

  componentDidMount() {
    this.fetchCredits();
  }

  fetchCredits = () => {
    const { movieId } = this.props.match.params;
    this.setState({ isLoading: true });

    api
      .getMovieCredits(movieId)
      .then(response => {
        this.setState({ cast: [...response.data.cast] });
      })
      .catch(error => {
        console.log(error);
        return [];
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { cast, isLoading } = this.state;
    return (
      <>
        <CastInfo cast={cast} />

        {isLoading && <Loader isLoading={isLoading} />}
      </>
    );
  }
}

export default Cast;
