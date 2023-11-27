import { ContactListItem } from './ContactListItem/ContactListItem';
import styles from './ContactList.module.css';
import { useContactsToRender } from 'src/hooks/useContactsToRender';

export const ContactList = ({ contacts }) => {
  return (
    <ul className={styles.list_contacts}>
      {useContactsToRender(contacts).map((el) => (
        <li key={el._id} className={styles.item}>
          {contacts && <ContactListItem contact={el} />}
        </li>
      ))}
    </ul>
  );
};
