import PropTypes from 'prop-types';
import React from 'react';
import './layout.css';
import './bootstrap.min.css';
import Navbar from './Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
