import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaXmark } from 'react-icons/fa6';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { addContact, updateContact } from '../../redux/contacts/operations';
import { setModalOpen } from '../../redux/modal/slice';
import { selectModalSettings } from '../../redux/modal/selectors';

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
            <ErrorMessage className={css.error} name="name" component="div" />
          </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={nameFieldId}
          ></Field>

          <label className={css.label} htmlFor={telFieldId}>
            Number{' '}
            <ErrorMessage className={css.error} name="number" component="div" />
          </label>
          <Field
            className={css.input}
            type="tel"
            name="number"
            id={telFieldId}
          ></Field>
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
