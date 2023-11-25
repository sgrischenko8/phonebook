import { Formik, Form, Field } from 'formik';
import { Button } from 'components/Button/Button';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './CredentialForm.module.css';

const initialValues = { name: '', email: '', password: '' };

export const CredentialForm = ({ loginHandler, registerHandler }) => {
  const location = useLocation();

  function dummyClick() {
    return;
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={
        location.pathname === '/register' ? registerHandler : loginHandler
      }
    >
      <Form className={styles.credential_form}>
        {location.pathname === '/register' && (
          <>
            <label htmlFor="name">Name:</label>
            <Field
              type="text"
              name="name"
              pattern="['a-zA-Z\u0400-\u04ff0-9\s\W+\.]+"
              minLength="2"
              title="Name may contain only letters, apostrophe, dash, dots and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
          </>
        )}

        <label htmlFor="email">Email:</label>
        <Field
          type="email"
          name="email"
          pattern="^([^ ]+@[^ ]+\.[a-z]{2,6}|)$"
          title="E-mail may contain only letters, digits, At sign and dot. For example JacobMercer2@gmail.com"
        />

        <label htmlFor="password">Password:</label>
        <Field
          type="password"
          name="password"
          pattern="['a-zA-Z\d\s\W+\.]+."
          minLength="6"
          title="Password number may contain letters, digits, spaces and symbols"
        />
        <div className={styles.form_btn_container}>
          <Button onClick={dummyClick}>
            {location.pathname === '/register' ? 'Sign Up' : 'Log In'}
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

CredentialForm.propTypes = {
  loginHandler: PropTypes.func,
  registerHandler: PropTypes.func,
};
