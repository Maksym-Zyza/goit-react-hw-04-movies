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
      <>
        <h2>{original_title}</h2>
        {poster_path && (
          <img src={`${src}${poster_path}`} alt={original_title} />
        )}

        <p>Release {release_date}</p>
        <h3>Overview </h3>
        <span>{overview}</span>
        <p> Popularity {popularity}</p>
        <p> User rating {vote_average}</p>
        <p> User count {vote_count}</p>
        <h3>Genres</h3>
        {/* {<span>{genres.map(genre => genre.name).join(' ')}</span>} */}

        <div className="NavDiv">
          <NavLink
            to={`${this.props.match.url}/cast`}
            className="NavLink link"
            activeClassName="NavLink-active"
          >
            Cast
          </NavLink>
          <NavLink
            to={`${this.props.match.url}/reviews`}
            className="NavLink link"
            activeClassName="NavLink-active"
          >
            Reviews
          </NavLink>
        </div>

        <Switch>
          <Route path="/movies/:movieId/cast" component={Cast} />
          <Route path="movies/:movieId/reviews" component={Reviews} />
        </Switch>
      </>
    );
  }
}

export default MovieDetailsPage;
