import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';
import api from '../api/movies-api';

class MovieDetailsPage extends React.Component {
  state = {
    src: 'https://image.tmdb.org/t/p/w500',
    release_date: null,
  };

  componentDidMount() {
    this.fetchDetails();
  }

  fetchDetails = () => {
    const { movieId } = this.props.match.params;

    api.getMovieDetails(movieId).then(result => {
      this.setState({ ...result });
    });
  };

  render() {
    const {
      src,
      original_title,
      poster_path,
      overview,
      release_date,
      popularity,
      vote_average,
      vote_count,
      // genres,
    } = this.state;
    console.log(this.state);

    return (
      <div className="movie_div container">
        <h2 className="movie_title">{original_title}</h2>
        {poster_path && (
          <img
            className="movie_img"
            src={`${src}${poster_path}`}
            alt={original_title}
          />
        )}

        <div className="movie_info">
          <p className="movie_text">
            Release: <span className="movie_data">{release_date}</span>
          </p>
          <h3 className="movie_overview">Overview </h3>
          <span className="movie_text">{overview}</span>
          <p className="movie_text">
            Popularity: <span className="movie_data">{popularity}</span>
          </p>
          <p className="movie_text">
            Rating: <span className="movie_data">{vote_average}</span>
          </p>
          <p className="movie_text">
            Count: <span className="movie_data">{vote_count}</span>
          </p>
          <h3 className="movie_text">Genres</h3>
          {/* {<span>{genres.map(genre => genre.name).join(' ')}</span>} */}
        </div>

        <div className="navlink_div">
          <NavLink
            to={`${this.props.match.url}/cast`}
            className="NavLink link"
            activeClassName="NavLink-active"
          >
            Cast <span className="link_sign">&#9660;</span>
          </NavLink>
          <NavLink
            to={`${this.props.match.url}/reviews`}
            className="NavLink link"
            activeClassName="NavLink-active"
          >
            Reviews <span className="link_sign">&#9660;</span>
          </NavLink>
        </div>

        <Switch>
          <Route path="/movies/:movieId/cast" component={Cast} />
          <Route path="movies/:movieId/reviews" component={Reviews} />
        </Switch>
      </div>
    );
  }
}

export default MovieDetailsPage;
