import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import st from './SideBar.module.scss';
import { ReactComponent as Options } from '../Icons/Options.svg';
import { ReactComponent as ArrowRight } from '../Icons/ArrowRight.svg';
import { Routes } from '../../routes';

const pagesHidden = ['MovieDetails', 'PersonDetails', 'TvShowsDetails'];

export const SideBar = () => {
  const [sideBarOpened, setSideBarOpened] = useState(false);

  const toogleSideBar = () => {
    !sideBarOpened
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
    setSideBarOpened(!sideBarOpened);
  };

  return (
    <>
      <div className={st.burgerMenu}>
        <Options onClick={toogleSideBar} />
      </div>

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
                onClick={toogleSideBar}
                activeClassName={st.NavLinkActive}
              >
                <ArrowRight className={st.menuItemIcons} />
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={
          sideBarOpened
            ? `${st.sidebarOverlay} ${st.toggledOverlay}`
            : `${st.sidebarOverlay}`
        }
        onClick={() => {
          setSideBarOpened(false);
        }}
      />
    </>
  );
};
