import React from 'react';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';

import Home from './components/Home.jsx';
import Features from './components/Features.jsx';
import Contact from './components/Contact.jsx';
import Login from './components/Login.jsx';

// import logo from './assets/am-logo.png'

const App = () => {
  return (
    <BrowserRouter>
      <div className='container my-5'>
        <div className='nav nav-pills justify-content-between mb-3'>
          <div>
            <Link to='/' className='link nav-brand'>
              <img
                src=''
                width='50'
                height='50'
                alt='Applied Movement logo'
                title='Homepage'
              />
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
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
