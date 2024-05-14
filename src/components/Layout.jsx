import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TopLeftImg from "./TopLeftImg";
import Nav from "./Nav";
import Header from "./Header";
import Transition from "./Transition";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top of the page when route changes
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <TopLeftImg />
      <Nav />
      <Header />
      <Transition key={location.pathname} />
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname}>{children}</motion.div>
      </AnimatePresence>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
