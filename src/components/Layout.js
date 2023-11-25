import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ThemeSwitcher } from './ThemeSwitcher/ThemeSwitcher';
import { UserMenu } from './UserMenu/UserMenu';
import { Navigation } from './Navigation/Navigation';
import { Toaster } from 'react-hot-toast';
import Loader from 'components/Loader/Loader';
import styles from './Layout.module.css';

import { useSelector } from 'react-redux';
import { selectToken } from 'redux/selectors';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';

const Layout = () => {
  const token = useSelector(selectToken);
  const { isLoading } = useGetContactsQuery(undefined, {
    skip: token ? false : true,
  });

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_container}>
          <Navigation />
          {token && <UserMenu />}
          <ThemeSwitcher />
        </div>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      {isLoading && <Loader />}
    </>
  );
};

export default Layout;
