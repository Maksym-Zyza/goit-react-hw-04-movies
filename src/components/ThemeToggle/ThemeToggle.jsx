import { useState, useEffect } from 'react';
import { darkTheme } from '../../darkTheme';
import { Toggler } from './Toggler';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(window.localStorage?.getItem('theme'));

  const changeTheme = ({ target }) => {
    if (target.value === 'dark') {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  useEffect(() => {
    setTheme(window.localStorage.getItem('theme', 'dark'));
    const style = document.createElement('style');

    if (theme === 'dark') {
      document.head.appendChild(style);
      style.setAttribute('data-theme', 'theme');
      style.innerHTML = darkTheme;
    } else {
      const el = document.querySelector('[data-theme]');
      if (el) {
        document.head.removeChild(el);
      }
    }
    // console.log(document.head);
  }, [theme]);

  return (
    <div>
      <Toggler changeTheme={changeTheme} theme={theme} />
    </div>
  );
};
