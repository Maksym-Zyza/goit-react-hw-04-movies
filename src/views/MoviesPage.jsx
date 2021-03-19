import React from 'react';
import axios from 'axios';
import Searchbar from '../components/Searchbar/Searchbar';
import Loader from '../components/Loader';
import Button from '../components/Button/Button';
import scrollTo from '../components/scrollTo';
import MoviesGallery from '../components/MoviesGallery';
import Nothing from '../components/Nothing';

class MoviesPage extends React.Component {
  state = {
    movies: [],
    page: 1,
    query: '',
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.feachMovies();
    }
  }

  formSubmitQuery = search => {
    this.setState({ query: search, movies: [], page: 1, error: null });
  };

  feachMovies = () => {
    const { query, page } = this.state;
    // const options = { q, page };
    this.setState({ isLoading: true });

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}&api_key=523a15ded98cd05fab36993344058e43`,
      )
      .then(response => {
        this.setState(prevState => ({
          movies: [...prevState.movies, ...response.data.results],
          page: prevState.page + 1,
        }));
      })
      .catch(error => {
        console.log(error);
        return [];
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  render() {
    const { movies, isLoading, error } = this.state;
    const renderBtn = movies.length > 0 && !isLoading;
    const nothing = movies.length === 0;
    // console.log('movies >', movies);

    return (
      <div>
        <Searchbar onSubmit={this.formSubmitQuery} />

        <MoviesGallery movies={movies} />

        {isLoading && <Loader isLoading={isLoading} />}

        {renderBtn && <Button onClick={this.feachMovies} scroll={scrollTo()} />}

        {error && <h1>{error}</h1>}

        {nothing && <Nothing />}
      </div>
    );
  }
}

export default MoviesPage;
