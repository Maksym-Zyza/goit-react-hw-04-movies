import { useState } from 'react';
import st from './CastInfo.module.scss';
import defaultImg from '../../img/default.jpg';

export default function CastInfo({ cast }) {
  const [src] = useState('https://image.tmdb.org/t/p/w500');

  return (
    <div className="container">
      <ul className={st.castLisl}>
        {cast.map(({ cast_id, profile_path, name, character }) => (
          <li key={cast_id}>
            {profile_path ? (
              <img src={`${src}${profile_path}`} alt="Movie poster" />
            ) : (
              <img src={defaultImg} alt="Was not found" />
            )}
            <h3>{name}</h3>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
