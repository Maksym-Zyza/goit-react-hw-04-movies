import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import api from '../api/movies-api';

class HomePage extends React.Component {
  state = {
    trending: [],
    src: 'https://image.tmdb.org/t/p/w500',
    location: useLocation,
  };

  componentDidMount() {
    this.fetchTrending();
  }

  fetchTrending = () => {
    api.getMoviesTrending().then(results => {
      this.setState({ trending: [...results] });
    });
  };

  render() {
    const { trending, src, location } = this.state;

    return (
      <div>
        <h2> Daily trending movies </h2>
        <ul>
          {trending.map(
            ({ id, poster_path, original_title, popularity, vote_average }) => (
              <Link
                to={{
                  pathname: `/movies/${id}`,
                  from: location.pathname,
                }}
              >
                <li key={id}>
                  <img src={`${src}${poster_path}`} alt={original_title} />
                  <title>{original_title}</title>
                  <p>Popularity {popularity}</p>
                  <p>User rating {vote_average}</p>
                </li>
              </Link>
            ),
          )}
        </ul>
      </div>
    );
  }
}

export default HomePage;
