import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/selectors';

export const Navigation = () => {
  const token = useSelector(selectToken);

  return (
    <nav>
      <ul className={styles.nav_list}>
        {token && (
          <li>
            <NavLink to="contacts">Contacts</NavLink>
          </li>
        )}

        {!token && (
          <li>
            <NavLink to="register">Register</NavLink>
          </li>
        )}
        {!token && (
          <li>
            <NavLink to="login">Login</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
