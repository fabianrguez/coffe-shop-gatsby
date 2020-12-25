import PropTypes from 'prop-types';
import React from 'react';
import './layout.css';
import './bootstrap.min.css';

const Layout = ({ children }) => {
  return <>{children}</>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
