import React, { useState, setShow } from 'react';

import { Link } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    setShow(false);
  };

  return (
    <div>
      <Button variant='logo1' onClick={handleShow}>
        Login
      </Button>
      <Modal className='mt-5' show={show} onHide={handleClose}>
        <form>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='form-group'>
              <label htmlFor='exampleInputEmail1'>Email address</label>
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
              <label htmlFor='exampleInputPassword1'>Password</label>
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
            <Link to='/patientinfo' className='link nav-link'>
              <Button type='submit' variant='logo1' onClick={handleSubmit}>
                Submit
              </Button>
            </Link>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default Login;
