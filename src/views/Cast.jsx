import React from 'react';
// import api from '../api/movies-api';
import axios from 'axios';
import defaultImg from '../img/default.jpg';

class Cast extends React.Component {
  state = {
    src: 'https://image.tmdb.org/t/p/w500',
    isLoading: false,
    cast: [],
  };

  componentDidMount() {
    this.fetchCredits();
  }

  fetchCredits = () => {
    const { movieId } = this.props.match.params;
    // this.setState({ isLoading: true });
    console.log(movieId);

    // api.getMovieCredits(movieId).then(cast => {
    //   this.setState({ ...cast });
    // });

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=523a15ded98cd05fab36993344058e43`,
      )
      .then(response => {
        this.setState({ cast: [...response.data.cast] });
      })
      .catch(error => {
        console.log(error);
        return [];
      });
    // .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { cast, src } = this.state.cast;
    console.log(this.state);
    // const author = cast.find(author => author.id);
    // console.log(author);

    return (
      <>
        <h2> Cast page </h2>
        {cast && (
          <div className="container">
            <ul className="movies_ul">
              {cast.map(({ cast_id, profile_path, name, character }) => (
                <li key={cast_id} className="movies_li">
                  {profile_path ? (
                    <img
                      src={`${src}${profile_path}`}
                      alt="Movie poster"
                      className="movies_img"
                    />
                  ) : (
                    <img
                      src={defaultImg}
                      alt="Was not found"
                      className="movies_img"
                    />
                  )}
                  <h3 className="movies_title">{name}</h3>
                  <p>Character: {character}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

export default Cast;
