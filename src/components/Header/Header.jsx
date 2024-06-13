import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

export default function Header() {
  const IsLoggedIn = useSelector(selectIsLoggedIn);

  const buildLinkClass = ({ isActive }) => {
    return !isActive ? css.link : [css.link, css.active].join(' ');
  };

  return (
    <header className={css.header}>
      <div>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        {IsLoggedIn && (
          <NavLink className={buildLinkClass} to="/contacts">
            PhoneBook
          </NavLink>
        )}
      </div>
      <div>{IsLoggedIn ? <UserMenu /> : <AuthNav />}</div>
    </header>
  );
}
