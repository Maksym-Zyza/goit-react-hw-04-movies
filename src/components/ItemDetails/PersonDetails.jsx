import { useState, useEffect } from 'react';
import st from './Details.module.scss';
import api from '../../api/movies-api';
import defaultImg from '../../img/default.jpg';

export default function PersonDetails() {
  const [src] = useState('https://image.tmdb.org/t/p/w500');
  const [person, setPerson] = useState({});

  useEffect(() => {
    const movieId = window.location.pathname.split('/').pop();
    api.getPersonDetails(movieId).then(result => {
      setPerson({ ...result });
    });
  }, []);

  return (
    <div className={st.details}>
      <h2>{person.name}</h2>
      {person?.profile_path ? (
        <img src={`${src}${person?.profile_path}`} alt="Person poster" />
      ) : (
        <img src={defaultImg} alt="Was not found" />
      )}

      <div>
        <p>
          Birthday: <span>{person.birthday}</span>
        </p>
        <p>
          Place of birth: <span>{person.place_of_birth}</span>
        </p>
        <h3>Biography </h3>
        <span>{person.biography}</span>
        <p>
          Popularity:
          <span>{String(Math.round(person.popularity))}</span>
        </p>
        <p>
          Department:
          <span>{person.known_for_department}</span>
        </p>
        <p>
          Homepage:
          {person.homepage ? (
            <a href={person.homepage} target="blank">
              <span>{person.homepage}</span>
            </a>
          ) : (
            <span>not found</span>
          )}
        </p>
        {/* <h3>Also known as:</h3>
        {person?.also_known_as.map(el => (
          <div key={person.id}>{el}</div>
        ))} */}
      </div>
    </div>
  );
}
