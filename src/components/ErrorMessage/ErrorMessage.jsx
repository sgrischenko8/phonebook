import toast from 'react-hot-toast';

const ErrorMessage = ({ error, path }) => {
  if (error.status === 400 && !error.data.message && path === '/login') {
    console.log(error);
    toast.error('E-mail and password not fit');
    return;
  }

  if (error.data.code === 11000) {
    console.log(error, 'error 11000');
    toast.error('Your access denied');
    return;
  }

  if (error.status === 400 && error.data.code !== 11000) {
    toast.error('Fill all fields');
    return;
  }
};

export default ErrorMessage;
