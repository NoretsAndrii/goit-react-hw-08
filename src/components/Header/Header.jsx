import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';

export default function Header() {
  const IsLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <div>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
        {IsLoggedIn && (
          <NavLink className={css.link} to="/contacts">
            PhoneBook
          </NavLink>
        )}
      </div>
      <div>
        {IsLoggedIn && <UserMenu />}
        {!IsLoggedIn && (
          <>
            <NavLink className={css.link} to="/register">
              Register
            </NavLink>
            <NavLink className={css.link} to="/login">
              Login
            </NavLink>
          </>
        )}
      </div>
    </header>
  );
}
