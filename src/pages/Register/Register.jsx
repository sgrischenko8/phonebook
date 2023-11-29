// import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import {
  useRegisterMutation,
  useVerifyMutation,
} from 'src/redux/auth/authSlice';
import { CredentialForm } from 'src/components/CredentialForm/CredentialForm';
import Loader from 'src/components/Loader/Loader';
import toast from 'react-hot-toast';
import ErrorMessage from 'src/components/ErrorMessage/ErrorMessage';
import css from './Register.module.css';

const Register = () => {
  let navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const verificationToken = searchParams.get('verificationToken');

  const [register, { isLoading, error, isSuccess }] = useRegisterMutation();
  const [
    verify,
    {
      isLoading: verifyIsLoading,
      error: verifyError,
      isSuccess: verifySuccess,
    },
  ] = useVerifyMutation();

  const verifyRegister = async () => {
    try {
      await verify(verificationToken).then((res) => {
        console.log(res, 'promise verify');
        if (!res.error) {
          showCongrats();
          const { email } = res.data;
          navigate('/login', { state: { email } });
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (verificationToken) {
      verifyRegister();
    }
  }, []);

  const showCongrats = () => {
    toast.success(
      verifySuccess
        ? 'You successfully register!'
        : 'Check your email for verification link',
    );
  };

  const registerHandler = async (values) => {
    try {
      await register(values).then((res) => {
        console.log(res, 'promise register');
        isSuccess && showCongrats();
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className={css.main_container}>
        <h1>Phonebook</h1>
        <CredentialForm registerHandler={registerHandler} />
        <p className={css.caution_container}>
          Please, write real email. Verification procedure goes with the link in
          the letter
        </p>
      </div>
      {error && (
        <ErrorMessage error={error ? error : verifyError} path={'/register'} />
      )}
      {isLoading || verifyIsLoading ? <Loader /> : null}
    </>
  );
};

export default Register;
