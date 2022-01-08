import React from 'react';
import { Link, useLocation, withRouter } from 'react-router-dom';

class MoviesGallery extends React.Component {
  state = {
    src: 'https://image.tmdb.org/t/p/w500',
    location: useLocation,
  };

  render() {
    const { src } = this.state;
    const { movies, location } = this.props;

    return (
      <div className="container">
        <ul className="moviesList">
          {movies.map(({ id, poster_path, title, vote_average }) => (
            <Link
              key={id}
              to={{
                pathname: `/movies/${id}`,
                state: { from: `${location.pathname}` },
              }}
            >
              <li>
                <img src={`${src}${poster_path}`} alt={title} />
                <h4> {title}</h4>
                <div>
                  <span>{vote_average}</span>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(MoviesGallery);
