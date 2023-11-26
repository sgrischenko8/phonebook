import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { setToken } from 'src/redux/auth/tokenSlice';
import {
  useRegisterMutation,
  useVerifyMutation,
} from 'src/redux/auth/authSlice';
import { CredentialForm } from 'src/components/CredentialForm/CredentialForm';
import Loader from 'src/components/Loader/Loader';
import toast from 'react-hot-toast';
import ErrorMessage from 'src/components/ErrorMessage/ErrorMessage';
import styles from './Register.module.css';

const Register = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [register, { isLoading, error, isSuccess }] = useRegisterMutation();
  const [verify, { isLoading: verifyIsLoading, error: verifyError }] =
    useVerifyMutation();

  const verifyRegister = async () => {
    try {
      await verify(verificationToken).then((res) => {
        console.log(res, 'promise verify');
        if (res.status === 200) {
          navigate('/login', { state: { email: res?.data?.email } });
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  const { verificationToken } = useParams();
  if (verificationToken) {
    verifyRegister();
  }

  const showCongrats = () => {
    toast.success('You successfully registered');
  };

  const registerHandler = async (values) => {
    try {
      await register(values).then((res) => {
        console.log(res, 'promise register');
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
