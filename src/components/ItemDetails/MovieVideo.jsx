import React from 'react';
import st from './Details.module.scss';
import { ReactComponent as Play } from '../Icons/Play.svg';

export default function MovieVideo() {
  return (
    <div className={st.btnPlay}>
      <Play />
    </div>
  );
}
