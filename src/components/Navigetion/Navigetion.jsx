import { NavLink } from 'react-router-dom';
import st from './Navigetion.module.scss';
import routes from '../../routes';

const NavHome = () => {
  return (
    <nav className={st.NavDiv}>
      <NavLink
        exact
        to={routes.home}
        className={st.NavLink}
        activeClassName={st.NavLinkActive}
      >
        Home
      </NavLink>

      <NavLink
        to={routes.movies}
        className={st.NavLink}
        activeClassName={st.NavLinkActive}
      >
        Movies
      </NavLink>
    </nav>
  );
};

const NavMovieDetails = ({ match }) => {
  return (
    <div className={st.navlink_div}>
      <NavLink
        to={`${match.url}/cast`}
        className={`${st.NavLink} ${st.link}`}
        activeClassName={st.NavLinkActive}
      >
        Cast <span className={st.link_sign}>&#9660;</span>
      </NavLink>
      <NavLink
        to={`${match.url}/reviews`}
        className={`${st.NavLink} ${st.link}`}
        activeClassName={st.NavLinkActive}
      >
        Reviews <span className={st.link_sign}>&#9660;</span>
      </NavLink>
    </div>
  );
};

const Navigation = {
  NavHome,
  NavMovieDetails,
};

export default Navigation;
