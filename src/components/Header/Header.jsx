import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';

export default function Header() {
  const IsLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUser);

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
        {IsLoggedIn && <p>Welcome, {userName.name}</p>}
        {!IsLoggedIn && (
          <>
            {' '}
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
