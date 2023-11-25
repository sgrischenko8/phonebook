import { RotatingSquare } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <RotatingSquare
        ariaLabel="rotating-square"
        visible={true}
        strokeWidth="10"
        color="rgba(219, 157, 43, 0.5)"
      />
    </div>
  );
};

export default Loader;
