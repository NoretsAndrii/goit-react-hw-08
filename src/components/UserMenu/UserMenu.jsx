import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';

export default function UserMenu() {
  const userName = useSelector(selectUser);

  return <p>Welcome, {userName.name}</p>;
}
