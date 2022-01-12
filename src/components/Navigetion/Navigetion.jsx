import { NavLink, useLocation } from 'react-router-dom';
import st from './Navigetion.module.scss';
import { Routes } from '../../routes';

const NavPage = () => {
  const location = useLocation();
  const route = Routes.find(
    el => el.path.split('/')[1] === location.pathname.split('/')[1],
  );
  return (
    <nav className={st.nav}>
      <div className={st.NavLink}>{route.name}</div>
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

// const Nav = () => {
//   return (
//     <nav className={st.nav}>
//       {Routes.map(route => (
//         <NavLink
//           key={route.name}
//           exact={route.exact}
//           to={route.path}
//           className={st.NavLink}
//           activeClassName={st.NavLinkActive}
//         >
//           {route.name}
//         </NavLink>
//       ))}
//     </nav>
//   );
// };

const Navigation = {
  NavPage,
  NavMovieDetails,
  // Nav,
};

export default Navigation;
