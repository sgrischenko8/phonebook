import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setToken } from 'src/redux/auth/tokenSlice';
import Loader from 'src/components/Loader/Loader';
import { CredentialForm } from 'src/components/CredentialForm/CredentialForm';
import { useLoginMutation } from 'src/redux/auth/authSlice';
import ErrorMessage from 'src/components/ErrorMessage/ErrorMessage';

const Login = () => {
  let location = useLocation();
  console.log(location, 'location');

  const dispatch = useDispatch();
  const [login, { isLoading, error }] = useLoginMutation();

  const loginHandler = async (values) => {
    try {
      await login(values).then((res) => {
        dispatch(setToken(res?.data?.token));
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Phonebook</h1>
      <CredentialForm
        loginHandler={loginHandler}
        email={location.state?.email}
      />
      {error && <ErrorMessage error={error} path={'/login'} />}
      {isLoading && <Loader />}
    </>
  );
};

export default Login;
