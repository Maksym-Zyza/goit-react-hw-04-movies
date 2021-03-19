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
      genres,
    } = this.state;
    const { match } = this.props;
    // console.log(this.state);

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
          <p className="text">
            Release: <span className="data">{release_date}</span>
          </p>
          <h3 className="movie_overview">Overview </h3>
          <span className="text">{overview}</span>
          <p className="text">
            Popularity:{' '}
            <span className="data">{String(Math.round(popularity))}</span>
          </p>
          <p className="text">
            Rating: <span className="data">{vote_average}</span>
          </p>
          <p className="text">
            Count: <span className="data">{vote_count}</span>
          </p>
          <h3 className="text">Genres</h3>
          {genres
            ? genres.map(({ id, name }) => (
                <p key={id} className="data">
                  {name}
                </p>
              ))
            : `We don't have any ganres for this movie.`}
        </div>

        <div className="navlink_div">
          <NavLink
            to={`${match.url}/cast`}
            className="NavLink link"
            activeClassName="NavLink-active"
          >
            Cast <span className="link_sign">&#9660;</span>
          </NavLink>
          <NavLink
            to={`${match.url}/reviews`}
            className="NavLink link"
            activeClassName="NavLink-active"
          >
            Reviews <span className="link_sign">&#9660;</span>
          </NavLink>
        </div>

        <Switch>
          <Route path={`${match.path}/cast`} component={Cast} />
          <Route path={`${match.path}/reviews`} component={Reviews} />
        </Switch>
      </div>
    );
  }
}

export default MovieDetailsPage;
