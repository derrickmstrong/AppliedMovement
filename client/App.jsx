import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import Results from './components/Results.jsx';

const App = () => {

  return (
    <BrowserRouter>
      <div className='container my-5'>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
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
