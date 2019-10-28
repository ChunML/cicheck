import PropTypes from 'prop-types';
import Nav from './Nav';

const Page = ({ children }) => (
  <div>
    <Nav />
    { children }
  </div>
);

Page.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Page;
