import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import Header from '../Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refresh } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  console.log(isRefreshing);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return !isRefreshing ? (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  ) : null;
}

export default App;
