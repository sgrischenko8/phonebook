import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'src/redux/contacts/filterSlice';
import { selectFilter } from 'src/redux/selectors';
import styles from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  function changeFilter(event) {
    dispatch(setFilter(event.target.value));
  }
  return (
    <label className={styles.filter_label}>
      <input
        className={styles.filter_input}
        type="text"
        value={filter}
        onChange={changeFilter}
        placeholder="Find contacts by name"
      ></input>
    </label>
  );
};
