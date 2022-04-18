import React, { useRef } from 'react';
import './Login.css';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { sendPasswordResetEmail } from 'firebase/auth';

const Login = () => {  
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  // Redirect condition
  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    
    signInWithEmailAndPassword(email, password);
  };

  const handlePasswordReset = () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('email sent');
      });
  };

  const navigateRegister = event => {
    navigate('/register');
  };

    return (
      <div className="container form-login w-25 mx-auto rounded">
        <h1 className="text-center">Please login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <p className="mt-2">
          New to Moon Travel?{" "}
          <Link
            to="/register"
            className="text-danger cursor-pointer text-decoration-none"
            onClick={navigateRegister}
          >
            Please Register
          </Link>
        </p>
        <Button onClick={handlePasswordReset} className='text-decoration-none' variant="link">Forget password? Reset</Button>
        <div className="d-flex align-items-center justify-content-center">
          <hr className="w-50 me-2" />
          or
          <hr className="w-50 ms-2" />
        </div>
        <div className="text-center">
          <button
            className="btn btn-primary my-4"
            onClick={() => signInWithGoogle()}
          >
            Login with Google
          </button>
        </div>
      </div>
    );
};

export default Login;