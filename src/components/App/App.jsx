import './App.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import { selectError, selectLoading } from '../../redux/contactsSlice';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function App() {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {isLoading && <Loader />}
        {isError && <ErrorMessage />}
        {!isLoading && !isError && <ContactList />}
      </div>
    </>
  );
}

export default App;
