import { ContactListItem } from './ContactListItem/ContactListItem';
import styles from './ContactList.module.css';
import { useGetContactsQuery } from 'src/redux/contacts/contactsSlice';
import { useContactsToRender } from 'src/hooks/useContactsToRender';

export const ContactList = () => {
  const { data: contacts } = useGetContactsQuery();

  return (
    <ul className={styles.list_contacts}>
      {useContactsToRender(contacts).map((el) => (
        <li key={el.id} className={styles.item}>
          {contacts && <ContactListItem contact={el} />}
        </li>
      ))}
    </ul>
  );
};
