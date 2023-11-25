import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

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

ErrorMessage.propTypes = {
  path: PropTypes.string,
  error: PropTypes.shape({
    status: PropTypes.number,
    data: PropTypes.object,
  }),
};

export default ErrorMessage;
