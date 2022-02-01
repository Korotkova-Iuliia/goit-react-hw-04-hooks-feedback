import PropTypes from 'prop-types';
import { TitleMainStyle } from './TitleMainStyle.styled';
const TitleMain = ({ title }) => {
  return <TitleMainStyle>{title}</TitleMainStyle>;
};
TitleMain.propTypes = {
  title: PropTypes.string,
};
export default TitleMain;
