import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import st from './SideBar.module.scss';
import { ReactComponent as Options } from '../Icons/Options.svg';
import { ReactComponent as ArrowRight } from '../Icons/ArrowRight.svg';
import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch';
import { LanguageSwitch } from '../LanguageSwitch/LanguageSwitch';
import { text } from '../..//helpers/text';
import { Routes } from '../../routes';

const pagesHidden = [
  text.MovieDetails,
  text.PersonDetails,
  text.TvShowsDetails,
];

export const SideBar = () => {
  const [sideBarOpened, setSideBarOpened] = useState(false);

  const toggleSideBar = () => {
    sideBarOpened
      ? (document.body.style.overflow = 'auto')
      : (document.body.style.overflow = 'hidden');
    setSideBarOpened(!sideBarOpened);
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      toggleSideBar();
    }
  };

  return (
    <>
      <div className={st.burgerMenu}>
        <Options onClick={toggleSideBar} />
      </div>

      <div
        className={
          sideBarOpened
            ? `${st.sidebarOverlay} ${st.toggledOverlay}`
            : `${st.sidebarOverlay}`
        }
        onClick={handleBackdropClick}
      />

      <div
        className={
          sideBarOpened ? `${st.sidebar} ${st.toggledSidebar}` : `${st.sidebar}`
        }
      >
        <ul className={st.sidebarContent}>
          {Routes.filter(route =>
            pagesHidden.includes(route.name) ? null : route,
          ).map(route => (
            <li key={route.name} className={route.disabled ? st.disabled : ''}>
              <NavLink
                to={route.path}
                exact={route.exact}
                onClick={toggleSideBar}
                activeClassName={st.NavLinkActive}
              >
                <ArrowRight className={st.menuItemIcons} />
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <ThemeSwitch />
        <LanguageSwitch />
      </div>
    </>
  );
};
