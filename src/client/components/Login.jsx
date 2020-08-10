import React, { useState, setShow } from 'react';

import { Link } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const handleEmail = (e) => setEmail(e.target.value)
  const handlePassword = (e) => setPassword(e.target.value)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    fetch('/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(email, password)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        token = data.token;
      });
      setShow(false);
  };

//   const handleSubmit = async (e) => {
// try {
//   let userLogin = await fetch('/api/login', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: await JSON.stringify(email, password)
//   })
//   let user = await userLogin.json();
//   let token = user.token
//   // console.log('returning user', user)
//   // console.log('User login response', userLogin)

// } catch(err) {
//   console.log(err)
// }
//   }

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
                value={email}
                onChange={handleEmail}
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
                value={password}
                onChange={handlePassword}
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
