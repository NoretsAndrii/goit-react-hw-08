import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import css from './LoginForm.module.css';
import { login } from '../../redux/auth/operations';

const contactFormSchema = Yup.object().shape({
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

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    // .unwrap()
    // .then(data => console.log(data))
    // .catch(err => console.log(err));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={contactFormSchema}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email{' '}
          <ErrorMessage className={css.error} name="email" component="div" />
          <Field className={css.input} type="email" name="email" />
        </label>
        <label className={css.label}>
          Password{' '}
          <ErrorMessage className={css.error} name="password" component="div" />
          <Field className={css.input} type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
