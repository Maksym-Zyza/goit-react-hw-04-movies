import { useState, useEffect } from 'react';
import { Link, useLocation, withRouter } from 'react-router-dom';
import api from '../api/movies-api';
import defaultImg from '../img/default.jpg';
import Loader from '../components/Loader/Loader';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [src] = useState('https://image.tmdb.org/t/p/w500');
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const movieId = window.location.pathname.split('/')[2];

    setIsLoading(true);

    api
      .getMovieCredits(movieId)
      .then(response => {
        setCast([...response.data.cast]);
      })
      .catch(error => {
        console.log(error);
        return [];
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <div className="container">
        <ul className="castLisl">
          {cast.map(({ id, profile_path, name, character }) => (
            <Link
              key={id}
              to={{
                pathname: `/persons/${id}`,
                state: { from: location.pathname },
              }}
            >
              <li key={id}>
                {profile_path ? (
                  <img src={`${src}${profile_path}`} alt="Movie poster" />
                ) : (
                  <img src={defaultImg} alt="Was not found" />
                )}
                <h3>{name}</h3>
                <p>{character}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {isLoading && <Loader isLoading={isLoading} />}
    </>
  );
};

export default withRouter(Cast);

// class Cast extends React.Component {
//   state = {
//     isLoading: false,
//     cast: [],
//   };

//   componentDidMount() {
//     this.fetchCredits();
//   }

//   fetchCredits = () => {
//     const { movieId } = this.props.match.params;
//     this.setState({ isLoading: true });

//     api
//       .getMovieCredits(movieId)
//       .then(response => {
//         this.setState({ cast: [...response.data.cast] });
//       })
//       .catch(error => {
//         console.log(error);
//         return [];
//       })
//       .finally(() => this.setState({ isLoading: false }));
//   };

//   render() {
//     const { cast, isLoading } = this.state;
//     return (
//       <>
//         <CastInfo cast={cast} />

//         {isLoading && <Loader isLoading={isLoading} />}
//       </>
//     );
//   }
// }

// export default Cast;
