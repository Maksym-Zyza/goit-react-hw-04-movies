import { useState } from 'react';
import ReactPlayer from 'react-player';
import st from './Details.module.scss';
import Loader from '../../components/Loader/Loader';

export default function MovieVideo({ videoKey }) {
  return (
    <div className={st.movieVideo}>
      <ReactPlayer
        controls
        playing={true}
        url={`https://www.youtube.com/watch?v=${videoKey}`}
      />
    </div>
  );
}
