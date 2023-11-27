import { Filter } from 'src/components/Filter/Filter';
import { Button } from 'src/components/Button/Button';
import { Modal } from 'src/components/Modal/Modal';
import { ContactList } from 'src/components/ContactList/ContactList';
import { useGetContactsQuery } from 'src/redux/contacts/contactsSlice';
import { useState } from 'react';
import styles from './Contacts.module.css';

const Contacts = () => {
  const { data: contacts, error } = useGetContactsQuery();
  console.log(contacts, error, 'contacts');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      {contacts && (
        <div className={styles.contacts_container}>
          <div className={styles.contact_page_container}>
            {contacts?.length > 0 && <Filter />}
            <Button onClick={() => setIsModalOpen(true)}>+</Button>
          </div>

          <ContactList contacts={contacts} />
          {isModalOpen && <Modal onClose={toggleModal}></Modal>}
        </div>
      )}
    </>
  );
};
export default Contacts;
