import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { IoMdLogOut } from 'react-icons/io';
import { logout } from '../../redux/auth/operations';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const userName = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {userName.name}</p>
      <button
        className={css.button}
        type="button"
        title="LogOut"
        onClick={() => dispatch(logout())}
      >
        <IoMdLogOut size={24} />
      </button>
    </div>
  );
}
