import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/selectors';
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
