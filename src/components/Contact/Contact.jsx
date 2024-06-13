import { useDispatch } from 'react-redux';

import css from './Contact.module.css';
import { FaUser, FaPhone, FaXmark, FaWpforms } from 'react-icons/fa6';
import { deleteContact } from '../../redux/contacts/contactsOps';
import { setModalOpen } from '../../redux/modal/modalSlice';

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  function openModal() {
    const data = {
      isModalOpen: true,
      typeModal: 'Edit contact',
      initialValues: {
        name,
        number,
      },
      id,
    };
    dispatch(setModalOpen(data));
  }
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
        <button className={css.button} onClick={openModal} title="Edit contact">
          <FaWpforms size={12} />
        </button>
        <button className={css.button} onClick={handleDelete} title="Delete">
          <FaXmark size={12} />
        </button>
      </div>
    </>
  );
}
