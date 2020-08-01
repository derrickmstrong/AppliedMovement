import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import BackToTop from 'react-easy-back-to-top';

import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import PatientInfoCopy from './components/PatientInfo-copy.jsx';
import Results from './components/Results.jsx';

const App = () => { 

  return (
    <BrowserRouter>
      <div className='container my-5'>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/patientinfo' component={PatientInfoCopy} />
          <Route exact path='/results' component={Results} />
        </Switch>
        <BackToTop
          backgroundColor='var(--link)'
          position={{ right: '5%', bottom: '10%' }}
          hover={{ backgroundColor: 'var(--link)', color: 'gray' }}
          transition='all 0.5s'
          showOnDistance={500}
          borderRadius={10}
          opacity='1'
          color='white'
          fontSize='12px'
          text='Go to Top'
        />
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
