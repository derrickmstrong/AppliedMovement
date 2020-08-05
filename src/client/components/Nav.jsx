import React from 'react';
import { Link } from 'react-router-dom';

import Login from './Login.jsx'

const Nav = () => {
 
  return (
    <div className='nav sticky-top nav-pills justify-content-between mb-5'>
      <div className='brand-logo'>
        <Link to='/' className='link nav-brand'>
          <img
            src='/assets/am-logo_v2.png'
            width='75'
            height='75'
            alt='Applied Movement logo'
            className='slide-out-blurred-right'
          />
          <span
            id='logo-text-applied'
            className='ml-3'
            title='Applied Movement Homepage'>
            Applied{' '}
          </span>
          <span id='logo-text-movement' title='Applied Movement Homepage'>
            {' '}
            Movement
          </span>
        </Link>
      </div>
      <ul className='nav nav-pills'>
        <li className='nav-item'>
          <a href='/#features' className='link nav-link'>
            Features
          </a>
        </li>
        <li className='nav-item'>
          <a href='/#contact' className='link nav-link'>
            Contact Us
          </a>
        </li>
        <li className='nav-item'>
          <Login />
        </li>
      </ul>
    </div>
  );
};

export default Nav;
