import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaXmark } from 'react-icons/fa6';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { addContact, updateContact } from '../../redux/contacts/contactsOps';
import {
  selectModalSettings,
  setModalOpen,
} from '../../redux/modal/modalSlice';

const contactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export default function ContactForm() {
  const nameFieldId = useId();
  const telFieldId = useId();
  const dispatch = useDispatch();
  const modalSettings = useSelector(selectModalSettings);

  const handleSubmit = (values, actions) => {
    modalSettings.typeModal === 'Add contact'
      ? dispatch(addContact(values))
      : dispatch(updateContact({ id: modalSettings.id, values }));
    actions.resetForm();
    closeModal();
  };

  function closeModal() {
    const data = {
      isModalOpen: false,
      typeModal: '',
      initialValues: {
        name: '',
        number: '',
      },
      id: null,
    };
    dispatch(setModalOpen(data));
  }

  return (
    <>
      <Formik
        initialValues={modalSettings.initialValues}
        onSubmit={handleSubmit}
        validationSchema={contactFormSchema}
      >
        <Form className={css.form}>
          <label className={css.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={nameFieldId}
          ></Field>
          <ErrorMessage className={css.error} name="name" component="div" />

          <label className={css.label} htmlFor={telFieldId}>
            Number
          </label>
          <Field
            className={css.input}
            type="tel"
            name="number"
            id={telFieldId}
          ></Field>
          <ErrorMessage className={css.error} name="number" component="div" />

          <button type="submit">{modalSettings.typeModal}</button>
        </Form>
      </Formik>
      <button
        className={css.close}
        type="button"
        title="Close"
        onClick={closeModal}
      >
        <FaXmark size={12} />
      </button>
    </>
  );
}
