import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from 'redux/themeSlice';
import { selectTheme } from 'redux/selectors';
import styles from './ThemeSwitcher.module.css';

export const ThemeSwitcher = () => {
  const theme = useSelector(selectTheme);

  function checkTheme() {
    if (theme === 'dark') {
      document.body.style.backgroundColor = 'rgb(32, 32, 37)';
      document.body.style.color = 'rgb(239, 240, 228)';
      return false;
    } else {
      document.body.style.backgroundColor = '#fffffb';
      document.body.style.color = 'rgb(32, 32, 37)';
      return true;
    }
  }

  const dispatch = useDispatch();

  function toggleTheme() {
    checkTheme();
    let nextTheme = '';
    theme === 'dark' ? (nextTheme = 'light') : (nextTheme = 'dark');
    dispatch(setTheme(nextTheme));
  }
  return (
    <div className={styles.theme_switcher}>
      <span className={styles.dark}> dark</span>
      <label htmlFor="checkbox"></label>
      <input
        type="checkbox"
        id="checkbox"
        checked={checkTheme()}
        onChange={toggleTheme}
        title="dark/light switcher"
      />
      <span className={styles.light}>light</span>
    </div>
  );
};
