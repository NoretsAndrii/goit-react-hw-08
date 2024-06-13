import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { fetchContacts } from '../../redux/contacts/contactsOps';
import { selectError, selectLoading } from '../../redux/contacts/contactsSlice';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import ContactList from '../../components/ContactList/ContactList';
import { selectIsModalOpen } from '../../redux/modal/modalSlice';

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
    paddingTop: '16px',
  },
};

export default function PhoneBook() {
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  const isModalOpen = useSelector(selectIsModalOpen);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2>Phonebook</h2>
      <Modal
        isOpen={isModalOpen}
        // onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ContactForm />
      </Modal>

      <SearchBox />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {!isLoading && !isError && <ContactList />}
    </div>
  );
}
