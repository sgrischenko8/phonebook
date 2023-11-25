import { useDispatch } from 'react-redux';
import { setToken } from 'redux/auth/tokenSlice';
import { useRegisterMutation } from 'redux/auth/authSlice';
import { CredentialForm } from 'components/CredentialForm/CredentialForm';
import Loader from 'components/Loader/Loader';
import toast from 'react-hot-toast';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import styles from './Register.module.css';

const Register = () => {
  const dispatch = useDispatch();
  const [register, { isLoading, error, isSuccess }] = useRegisterMutation();

  const showCongrats = () => {
    toast.success('You successfully registered');
  };

  const registerHandler = async values => {
    try {
      await register(values).then(res => {
        dispatch(setToken(res.data.token));
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className={styles.main_container}>
        <h1>Phonebook</h1>
        <CredentialForm registerHandler={registerHandler} />
      </div>
      {error && <ErrorMessage error={error} />}
      {isSuccess && showCongrats()}
      {isLoading && <Loader />}
    </>
  );
};

export default Register;
