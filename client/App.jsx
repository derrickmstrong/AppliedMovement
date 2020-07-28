import React from 'react';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';

import Home from './components/Home.jsx';
import Features from './components/Features.jsx';
import Contact from './components/Contact.jsx';
import Login from './components/Login.jsx';
import Results from './components/Results.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <div className='container my-5'>
        <div className='nav nav-pills justify-content-between mb-5'>
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
              <Link to='/features' className='link nav-link'>
                Product Features
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='link nav-link'>
                Contact Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/login' className='nav-link active'>
                Login
              </Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/features' component={Features} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/results' component={Results} />
        </Switch>

        <footer className='footer mt-auto py-2'>
          <div className='container'>
            <span className='text-muted'>
              Copyright &copy; {new Date().getFullYear()} - Applied Movement.
              All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
