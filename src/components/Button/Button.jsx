import styles from './Button.module.css';
import {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useEditContactMutation,
} from 'src/redux/contacts/contactsSlice';

import { selectToken } from 'src/redux/selectors';
import { useSelector } from 'react-redux';

export const Button = ({ children, onClick }) => {
  const token = useSelector(selectToken);
  const { isLoading } = useGetContactsQuery(undefined, {
    skip: token ? false : true,
  });
  const { isLoading: addLoading } = useAddContactMutation();
  const { isLoading: delLoading } = useDeleteContactMutation();
  const { isLoading: editLoading } = useEditContactMutation();

  const showTitle = () => {
    if (children === '+') {
      return 'Add Contact';
    }
    if (children?._owner?.child?.return?.type?.name === 'UserMenu') {
      return 'Log Out';
    }
  };

  return (
    <button
      className={styles.btn}
      type={
        children === '✔' || children === 'Sign Up' || children === 'Log In'
          ? 'submit'
          : 'button'
      }
      onClick={() => onClick()}
      disabled={
        isLoading || addLoading || delLoading || editLoading ? true : false
      }
      title={showTitle()}
    >
      {children}
    </button>
  );
};
