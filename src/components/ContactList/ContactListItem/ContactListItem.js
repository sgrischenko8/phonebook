import { Button } from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import { ReactComponent as Del } from 'icons/Del.svg';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import styles from './ContactListItem.module.css';
import { useState } from 'react';

export const ContactListItem = ({ contact }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  return (
    <>
      <div
        className={styles.contact_info_container}
        onClick={() => setIsModalOpen(true)}
        title="Edit Contact"
      >
        <span>{contact.name}:</span>
        <span className={styles.contact_number}>{contact.number}</span>
      </div>

      <Button onClick={() => deleteContact(contact.id)}>
        <Del />
      </Button>

      {isModalOpen && <Modal onClose={toggleModal} contact={contact}></Modal>}
      {isLoading && <Loader />}
    </>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
