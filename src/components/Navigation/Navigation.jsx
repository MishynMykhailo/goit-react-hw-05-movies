import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" className={s.link} activeclassmame={s.activeLink}>
        Home
      </NavLink>
      <NavLink to="/authors" className={s.link} activeclassmame={s.activeLink}>
        Authors
      </NavLink>
      <NavLink to="/books" className={s.link} activeclassmame={s.activeLink}>
        Books
      </NavLink>
    </nav>
  );
};
export default Navigation;
