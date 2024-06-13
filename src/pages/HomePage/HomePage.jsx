import { MdContactPhone } from 'react-icons/md';
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Phonebook</h1>
      <MdContactPhone size={120} />
    </div>
  );
}
