import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export default function AuthNav() {
  const buildLinkClass = ({ isActive }) => {
    return !isActive ? css.link : [css.link, css.active].join(' ');
  };

  return (
    <div className={css.wrapper}>
      <NavLink className={buildLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={buildLinkClass} to="/login">
        Login
      </NavLink>
    </div>
  );
}
