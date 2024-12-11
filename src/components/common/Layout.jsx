import { Footer, Header } from "../../utils/Route";
import PropTypes from "prop-types";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
