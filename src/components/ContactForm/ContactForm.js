import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/selectors';

import { Formik, Form, Field } from 'formik';
import { Button } from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import toast from 'react-hot-toast';
import styles from './ContactForm.module.css';

import {
  useGetContactsQuery,
  useAddContactMutation,
  useEditContactMutation,
  useDeleteContactMutation,
} from 'redux/contacts/contactsSlice';
import PropTypes from 'prop-types';

export const ContactForm = ({ onClose, contact }) => {
  const initialValues = { name: '', number: '' };
  contact?.name
    ? (initialValues.name = contact?.name)
    : (initialValues.name = '');
  contact?.number
    ? (initialValues.number = contact?.number)
    : (initialValues.number = '');

  const theme = useSelector(selectTheme);

  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();
  const [editContact, { isLoading: editLoading }] = useEditContactMutation();
  const [deleteContact, { isLoading: delLoading }] = useDeleteContactMutation();

  const checkForEmptiness = values => {
    if (values.name.trim() === '' || values.number.trim() === '') {
      return true;
    }
  };

  const addContactHandler = async (values, actions) => {
    if (checkForEmptiness(values)) {
      toast.error('Fill all fields');
      return;
    }
    if (
      contacts.some(
        item => item?.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      toast.error(`${values.name} is already in contacts.`);
      return;
    }

    try {
      await addContact(values);
    } catch (error) {
      console.log(error);
    } finally {
      actions.resetForm();
      onClose();
    }
  };

  const editContactHandler = async (values, actions) => {
    if (contact.name === values.name && contact.number === values.number) {
      actions.resetForm();
      onClose();
      return;
    }
    if (checkForEmptiness(values)) {
      toast.error('Fill all fields');
      return;
    }

    try {
      await editContact(contact.id, values);
      await deleteContact(contact.id);
      addContactHandler(values, actions);
    } catch (error) {
      console.log(error);
    } finally {
      // actions.resetForm();
      // onClose();
    }
  };

  function dummyClick() {
    return;
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={initialValues.name ? editContactHandler : addContactHandler}
    >
      <Form
        className={
          theme === 'light'
            ? styles.form_phonebook_light
            : styles.form_phonebook
        }
      >
        <div className={styles.form_add_container}>
          <label htmlFor="name">Name</label>
          <Field
            type="text"
            name="name"
            pattern="['a-zA-Z\u0400-\u04ff0-9\s\W+\.]+"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <label htmlFor="number">Number</label>
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            maxLength="19"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +. For example +38(050)-32-74-456"
          />
        </div>
        <Button onClick={dummyClick}>✔</Button>

        {(isLoading || editLoading || delLoading) && <Loader />}
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onClose: PropTypes.func,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
