import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';

export const useContactsToRender = contacts => {
  const filter = useSelector(selectFilter);

  const sortedContacts = [...contacts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  if (!filter) {
    return sortedContacts;
  }
  const normalizedFilter = filter.toLowerCase();
  return sortedContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
