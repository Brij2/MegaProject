import React, { Fragment, useContext, useEffect } from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';
import AuthContext from '../../context/auth/authContext';
const Navbar = ({ changeLanguage }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, user, logout, getUser, token } = authContext;

  useEffect(() => {
    if (token != null) {
      getUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const out = () => {
    logout();
  };
  return (
    <Fragment>
      <nav className='green'>
        <div className='nav-wrapper'>
          <a href='/' className='brand-logo'>
            <i className='material-icons'>local_florist</i>
            Agro Bid
          </a>

          {/* eslint-disable-next-line */}
          <a href='#' data-target='mobile-demo' className='sidenav-trigger'>
            <i className='material-icons'>menu</i>
          </a>
          <ul className='right hide-on-med-and-down'>
            <li>
              {/* eslint-disable-next-line */}
              <a href='/'>
                Home
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href='#' onClick={() => changeLanguage('de')}>
                ಕನ್ನಡ
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href='#' onClick={() => changeLanguage('en')}>
                English
              </a>
            </li>
            {!isAuthenticated && (
              <li>
                {/* eslint-disable-next-line */}
                <a href='/signup'>
                  Register
                </a>
              </li>
            )}
            {!isAuthenticated && (
              <li>
                {/* eslint-disable-next-line */}
                <a href='/signin'>
                  Login
                </a>
              </li>
            )}
            {isAuthenticated && (
              <li>
                {/* eslint-disable-next-line */}
                <a href='/profile' className='white-text'>
                  Profile
                </a>
              </li>
            )}
            {isAuthenticated && (
              <li>
                {/* eslint-disable-next-line */}
                <a href='/' className='white-text' onClick={out}>
                  Logout
                </a>
              </li>
            )}
            {isAuthenticated && user.roles.includes('ROLE_PRODUCER') && (
              <li>
                {/* eslint-disable-next-line */}
                <a href='/producer'>
                  Producer
                </a>
              </li>
            )}
            {isAuthenticated && user.roles.includes('ROLE_CONSUMER') && (
              <li>
                {/* eslint-disable-next-line */}
                <a href='/consumer'>
                  Consumer
                </a>
              </li>
            )}
            {isAuthenticated && user.roles.includes('ROLE_ADMIN') && (
              <li>
                {/* eslint-disable-next-line */}
                <a href='/admin'>
                  Admin
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>

      <ul className='sidenav green' id='mobile-demo'>
        <li>
          {/* eslint-disable-next-line */}
          <a href='/' className='white-text'>
            Home
          </a>
        </li>
        <li>
          {/* eslint-disable-next-line */}
          <a
            href='#'
            className='white-text'
            onClick={() => changeLanguage('de')}
          >
            ಕನ್ನಡ
          </a>
        </li>
        <li>
          {/* eslint-disable-next-line */}
          <a
            href='#'
            className='white-text'
            onClick={() => changeLanguage('en')}
          >
            English
          </a>
        </li>
        {!isAuthenticated && (
          <li>
            {/* eslint-disable-next-line */}
            <a href='/signup' className='white-text'>
              Register
            </a>
          </li>
        )}
        {!isAuthenticated && (
          <li>
            {/* eslint-disable-next-line */}
            <a href='/signin' className='white-text'>
              Login
            </a>
          </li>
        )}
        {isAuthenticated && (
          <li>
            {/* eslint-disable-next-line */}
            <a href='/profile' className='white-text'>
              Profile
            </a>
          </li>
        )}
        {isAuthenticated && (
          <li>
            {/* eslint-disable-next-line */}
            <a href='/' className='white-text' onClick={out}>
              Logout
            </a>
          </li>
        )}
        {isAuthenticated && user.roles.includes('ROLE_PRODUCER') && (
          <li>
            {/* eslint-disable-next-line */}
            <a href='/producer' className='white-text'>
              Producer
            </a>
          </li>
        )}
        {isAuthenticated && user.roles.includes('ROLE_CONSUMER') && (
          <li>
            {/* eslint-disable-next-line */}
            <a href='/consumer' className='white-text'>
              Consumer
            </a>
          </li>
        )}
        {isAuthenticated && user.roles.includes('ROLE_ADMIN') && (
          <li>
            {/* eslint-disable-next-line */}
            <a href='/admin' className='white-text'>
              Admin
            </a>
          </li>
        )}
      </ul>
    </Fragment>
  );
};

export default (Navbar);
