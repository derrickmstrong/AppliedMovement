import React, { useState, setShow } from 'react';
import { Link } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Nav = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
            <Button variant='logo1' onClick={handleShow}>
              Login
            </Button>
            <Modal show={show} onHide={handleClose}>
              <form>
                <Modal.Header closeButton>
                  <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className='form-group'>
                    <label for='exampleInputEmail1'>Email address</label>
                    <input
                      type='email'
                      className='form-control'
                      id='exampleInputEmail1'
                      aria-describedby='emailHelp'
                    />
                    <small id='emailHelp' className='form-text text-muted'>
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className='form-group'>
                    <label for='exampleInputPassword1'>Password</label>
                    <input
                      type='password'
                      className='form-control'
                      id='exampleInputPassword1'
                    />
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant='secondary' onClick={handleClose}>
                    Close
                  </Button>
                  <Button type='submit' variant='logo1' onClick={handleClose}>
                    Submit
                  </Button>
                </Modal.Footer>
              </form>
            </Modal>
          </li>
        </ul>
      </div>
    );
}

export default Nav
