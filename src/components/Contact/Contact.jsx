import { useDispatch } from 'react-redux';

import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <div className={css.contactBox}>
        <p>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}
