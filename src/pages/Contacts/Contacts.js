import { Filter } from 'components/Filter/Filter';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import { ContactList } from 'components/ContactList/ContactList';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';
import { useState } from 'react';
import styles from './Contacts.module.css';

const Contacts = () => {
  const { data: contacts } = useGetContactsQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  return (
    <>
      {contacts && (
        <div className={styles.contacts_container}>
          <div className={styles.contact_page_container}>
            {contacts?.length > 0 && <Filter />}
            <Button onClick={() => setIsModalOpen(true)}>+</Button>
          </div>

          <ContactList />
          {isModalOpen && <Modal onClose={toggleModal}></Modal>}
        </div>
      )}
    </>
  );
};
export default Contacts;
