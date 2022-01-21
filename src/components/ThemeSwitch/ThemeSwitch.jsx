import { useState, useEffect } from 'react';
import { darkTheme } from '../../helpers/darkTheme';
import { ThemeToggler } from './ThemeToggler';

export const ThemeSwitch = () => {
  const [theme, setTheme] = useState(window.localStorage?.getItem('theme'));

  useEffect(() => {
    if (theme === null) {
      window.localStorage.setItem('theme', 'light');
    }
  }, []);

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
  }, [theme]);

  return (
    <div>
      <ThemeToggler changeTheme={changeTheme} theme={theme} />
    </div>
  );
};
