import { useSelector } from 'react-redux';
import { selectTheme } from 'src/redux/selectors';

import { Formik, Form, Field } from 'formik';
import { Button } from 'src/components/Button/Button';
import Loader from 'src/components/Loader/Loader';
import toast from 'react-hot-toast';
import styles from './ContactForm.module.css';

import {
  useGetContactsQuery,
  useAddContactMutation,
  useEditContactMutation,
} from 'src/redux/contacts/contactsSlice';

export const ContactForm = ({ onClose, contact }) => {
  const initialValues = { name: '', phone: '' };
  contact?.name
    ? (initialValues.name = contact?.name)
    : (initialValues.name = '');
  contact?.phone
    ? (initialValues.phone = contact?.phone)
    : (initialValues.phone = '');

  const theme = useSelector(selectTheme);

  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();
  const [editContact, { isLoading: editLoading }] = useEditContactMutation();

  const checkForEmptiness = (values) => {
    if (values.name.trim() === '' || values.phone.trim() === '') {
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
        (item) => item?.name.toLowerCase() === values.name.toLowerCase(),
      )
    ) {
      toast.error(`${values.name} is already in contacts.`);
      return;
    }

    try {
      const res = await addContact(values);
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      actions.resetForm();
      onClose();
    }
  };

  const editContactHandler = async (values, actions) => {
    if (contact.name === values.name && contact.phone === values.phone) {
      actions.resetForm();
      onClose();
      return;
    }
    if (checkForEmptiness(values)) {
      toast.error('Fill all fields');
      return;
    }

    try {
      const res = await editContact({
        data: {
          contactId: contact._id,
          values,
        },
      });
      console.log(res);
      if (res?.data) {
        actions.resetForm();
        onClose();
        console.log(res.data);
      }
    } catch (error) {
      console.log(error);
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
          <label htmlFor="phone">Phone</label>
          <Field
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            maxLength="19"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +. For example +38(050)-32-74-456"
          />
        </div>
        <Button onClick={dummyClick}>✔</Button>

        {(isLoading || editLoading) && <Loader />}
      </Form>
    </Formik>
  );
};
