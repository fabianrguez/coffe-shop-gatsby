import React, { useState } from 'react';
import logo from '../../images/logo.svg';
import { FaCartArrowDown } from 'react-icons/fa';
import { graphql, Link, useStaticQuery } from 'gatsby';

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [links] = useState([
    { id: 1, path: '/', text: 'Home' },
    { id: 2, path: '/about', text: 'About' },
  ]);

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light sticky-top">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="logo" />
      </Link>
      <h5>{site.siteMetadata?.title}</h5>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${navbarOpen && 'show'}`}
        id="navbar"
      >
        <ul className="navbar-nav mx-auto">
          {links &&
            links.map(link => (
              <li key={link.id} className="nav-item">
                <Link to={link.path} className="nav-link text-capitalize">
                  {link.text}
                </Link>
              </li>
            ))}
          <li className="nav-item ms-sm-5">
            <FaCartArrowDown className="cart-icon" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
