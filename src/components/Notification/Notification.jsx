import PropTypes from 'prop-types';
import { NotificationText } from './Notification.styled';
const Notification = ({ message }) => {
  return <NotificationText>{message}</NotificationText>;
};
export default Notification;
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
