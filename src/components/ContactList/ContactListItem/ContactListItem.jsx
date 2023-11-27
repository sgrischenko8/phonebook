import { Button } from 'src/components/Button/Button';
import Loader from 'src/components/Loader/Loader';
import { TrashIcon } from 'src/components/TrashIcon/TrashIcon';
import { Modal } from 'src/components/Modal/Modal';
import { useDeleteContactMutation } from 'src/redux/contacts/contactsSlice';
import styles from './ContactListItem.module.css';
import { useState } from 'react';

export const ContactListItem = ({ contact }) => {
  const [deleteContact, { error, isLoading }] = useDeleteContactMutation();
  console.log(error, 'del');

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
        <span className={styles.contact_phone}>{contact.phone}</span>
      </div>

      <Button onClick={() => deleteContact(contact._id)}>
        <TrashIcon />
      </Button>

      {isModalOpen && <Modal onClose={toggleModal} contact={contact}></Modal>}
      {isLoading && <Loader />}
    </>
  );
};
