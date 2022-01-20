import st from './ThemeToggle.module.scss';
import { ReactComponent as Sun } from '../Icons/Sun.svg';
import { ReactComponent as Moon } from '../Icons/Moon.svg';

export const Toggler = ({ changeTheme, theme }) => (
  <div className={st.btn}>
    <p>Theme:</p>

    {theme === 'light' && (
      <label>
        <input
          type="radio"
          name="theme"
          value="dark"
          onChange={changeTheme}
          defaultChecked={theme === 'dark'}
        />
        <Moon className={st.moon} />
      </label>
    )}

    {theme === 'dark' && (
      <label>
        <input
          type="radio"
          name="theme"
          value="light"
          onChange={changeTheme}
          defaultChecked={theme === 'light'}
        />
        <Sun className={st.sun} />
      </label>
    )}
  </div>
);
