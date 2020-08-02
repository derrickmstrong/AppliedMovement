import React from 'react';
import { Link } from 'react-router-dom';

import Login from './Login.jsx'

const Nav = () => {
 
  return (
    <div className='nav sticky-top nav-pills justify-content-between mb-5'>
      <div>
        <Link to='/' className='link nav-brand'>
          <img
            src='/assets/am-logo.png'
            width='50'
            height='50'
            alt='Applied Movement logo'
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
            Product Features
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
