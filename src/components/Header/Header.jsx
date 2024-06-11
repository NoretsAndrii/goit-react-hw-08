import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">PhoneBook</NavLink>
      <p>Welcome, username</p>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </header>
  );
}
