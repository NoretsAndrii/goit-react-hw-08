import { useDispatch } from 'react-redux';

import css from './Contact.module.css';
import { FaUser, FaPhone, FaXmark, FaWpforms } from 'react-icons/fa6';
import { deleteContact } from '../../redux/contacts/contactsOps';

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  const handleUpdate = () => {};

  return (
    <>
      {/* <div className={css.contactBox}> */}
      <p className={css.name}>
        <FaUser className={css.icon} />
        {name}
      </p>
      <p className={css.number}>
        <FaPhone className={css.icon} />
        {number}
      </p>
      {/* </div> */}
      <div className={css.buttons}>
        <button className={css.button} onClick={handleDelete} title="delete">
          <FaXmark size={12} />
        </button>
        <button className={css.button} onClick={handleUpdate} title="edit">
          <FaWpforms size={12} />
        </button>
      </div>
    </>
  );
}
