import React, { useState, setShow } from 'react';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';

import Nav from './components/Nav.jsx'
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Results from './components/Results.jsx';

const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <BrowserRouter>
      <div className='container my-5'>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
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
