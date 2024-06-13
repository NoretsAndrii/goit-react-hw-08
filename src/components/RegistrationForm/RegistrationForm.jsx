import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const contactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(7, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email()
    .min(7, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={contactFormSchema}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <ErrorMessage className={css.error} name="name" component="div" />
          <Field className={css.input} type="text" name="name" />
        </label>

        <label className={css.label}>
          Email
          <ErrorMessage className={css.error} name="email" component="div" />
          <Field className={css.input} type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <ErrorMessage className={css.error} name="password" component="div" />
          <Field className={css.input} type="password" name="password" />
        </label>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
