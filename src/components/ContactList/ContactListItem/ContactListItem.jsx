import { Button } from 'src/components/Button/Button';
import Loader from 'src/components/Loader/Loader';
import { TrashIcon } from 'src/components/TrashIcon/TrashIcon';
import { Modal } from 'src/components/Modal/Modal';
import { useDeleteContactMutation } from 'src/redux/contacts/contactsSlice';
import styles from './ContactListItem.module.css';
import { useState } from 'react';

export const ContactListItem = ({ contact }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
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
        <TrashIcon />
      </Button>

      {isModalOpen && <Modal onClose={toggleModal} contact={contact}></Modal>}
      {isLoading && <Loader />}
    </>
  );
};
