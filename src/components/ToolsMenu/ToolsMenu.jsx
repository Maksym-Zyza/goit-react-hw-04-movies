import { useState } from 'react';
import st from './ToolsMenu.module.scss';
import { ReactComponent as ToolDots } from '../../components/Icons/DotsMenu.svg';
import { Select } from '../../components/Inputs/Select';

export default function ToolsMenu({ time, type, changeSelect }) {
  const [showing, setShowing] = useState(false);

  const toogleTools = () => {
    !showing
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
    setShowing(!showing);
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      toogleTools();
    }
  };

  return (
    <div>
      <ToolDots className={st.toolDots} onClick={toogleTools} />

      {showing && (
        <div className={st.toolBarWrapper} onClick={handleBackdropClick}>
          <div className={st.toolBar}>
            <h3>Trending movies:</h3>
            <Select
              name={'time'}
              label={'Time'}
              isSelect={time}
              options={[
                { label: 'Day', value: 'day' },
                { label: 'Week', value: 'week' },
              ]}
              onChange={changeSelect}
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
              onChange={changeSelect}
            />
          </div>
        </div>
      )}
    </div>
  );
}
