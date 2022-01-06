import React from 'react';
import { Link, useLocation, withRouter } from 'react-router-dom';
import { ReactComponent as ToolDots } from '../components/Icons/DotsMenu.svg';
import { Select } from '../components/Inputs/Select';
import api from '../api/movies-api';

class HomePage extends React.Component {
  state = {
    trending: [],
    src: 'https://image.tmdb.org/t/p/w500',
    location: useLocation,
    showing: false,
    type: 'movie',
    time: 'day',
  };

  componentDidMount() {
    this.fetchTrending();
  }

  componentDidUpdate(_, prevState) {
    const { time, type, showing } = this.state;
    if (prevState.showing !== showing) {
      showing
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'auto');
    }
    if (prevState.time !== time && time) {
      this.fetchTrending();
    }
    if (prevState.type !== type && type) {
      this.fetchTrending();
    }
  }

  fetchTrending = () => {
    const { type, time } = this.state;
    api.getMoviesTrending(type, time).then(results => {
      this.setState({ trending: [...results] });
    });
  };

  handleChange(e) {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleBackdropClick = event => {
    const { showing } = this.state;
    if (event.currentTarget === event.target) {
      this.setState({ showing: !showing });
    }
  };

  render() {
    const { location } = this.props;
    const { trending, src, time, type, showing } = this.state;
    const title =
      time === 'day' ? 'Today trending movies' : 'Trending movies of the week';

    return (
      <div className="container">
        <h2 className="page_title">{title}</h2>
        <ToolDots
          className="toolDots"
          onClick={() => this.setState({ showing: !showing })}
        />

        {showing && (
          <div
            className="toolBarWrapper"
            onClick={this.handleBackdropClick.bind(this)}
          >
            <div className="toolBar">
              <h3>Trending movies:</h3>
              <Select
                name={'time'}
                label={'Time'}
                isSelect={time}
                options={[
                  { label: 'Day', value: 'day' },
                  { label: 'Week', value: 'week' },
                ]}
                onChange={this.handleChange.bind(this)}
              />
              <Select
                name={'type'}
                label={'Type'}
                isSelect={type}
                options={[
                  { label: 'Movies', value: 'movie' },
                  { label: 'TV movies', value: 'tv' },
                  { label: 'All movies', value: 'all' },
                ]}
                onChange={this.handleChange.bind(this)}
              />
            </div>
          </div>
        )}

        <ul className="movies_ul">
          {trending.map(({ id, poster_path, title, vote_average }) => (
            <Link
              key={id}
              to={{
                pathname: `/movies/${id}`,
                state: { from: location.pathname },
              }}
            >
              <li className="movies_li">
                <img
                  className="movies_img"
                  src={`${src}${poster_path}`}
                  alt={title}
                />
                <p className="movies_title"> {title}</p>
                <p className="movies_rating">
                  <span className="rating">{vote_average}</span>
                </p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(HomePage);