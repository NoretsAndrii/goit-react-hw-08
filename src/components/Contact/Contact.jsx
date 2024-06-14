import { useDispatch } from 'react-redux';
import Modal from 'react-modal';

import css from './Contact.module.css';
import { FaUser, FaPhone, FaXmark, FaWpforms } from 'react-icons/fa6';
import { deleteContact } from '../../redux/contacts/operations';
import { setModalOpen } from '../../redux/modal/slice';
import { useState } from 'react';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(200, 200, 200, 0.75)',
  },
  content: {
    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    border: '2px solid black',
    borderRadius: '8px',
  },
};

export default function Contact({ name, number, id }) {
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
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
      <Modal isOpen={isModalDeleteOpen} style={customStyles}>
        <div className={css.modal}>
          <p>Delete contact?</p>
          <div>
            <button type="button" onClick={handleDelete}>
              Yes
            </button>
            <button type="button" onClick={() => setIsModalDeleteOpen(false)}>
              No
            </button>
          </div>
        </div>
      </Modal>
      <p className={css.name}>
        <FaUser className={css.icon} />
        {name}
      </p>
      <p className={css.number}>
        <FaPhone className={css.icon} />
        {number}
      </p>
      <div className={css.buttons}>
        <button className={css.button} onClick={openModal} title="Edit contact">
          <FaWpforms size={12} />
        </button>
        <button
          className={css.button}
          onClick={() => setIsModalDeleteOpen(true)}
          title="Delete"
        >
          <FaXmark size={12} />
        </button>
      </div>
    </>
  );
}
