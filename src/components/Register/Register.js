import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import './Register.css';
import auth from '../../firebase.init';
import { sendEmailVerification } from 'firebase/auth';

const Register = () => {
  const [error, setError] = useState('');
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);

  const nameRef = useRef('');
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef('');
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    verifyEmail();
    
    if (password !== confirmPassword) {
      setError("Your two password did not match");
      return;
    }
    
    createUserWithEmailAndPassword(email, password);
    
    console.log(email);
  };

  const navigateToLogin = (event) => {
    navigate("/login");
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        console.log('Email verification sent');
      });
  };

  // Redirect condition
  if (user) {
    navigate('/home');
  }

  return (
    <div className="container form-style w-25 mx-auto my-5 rounded">
      <h1 className="text-center">Please Register</h1>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            ref={nameRef}
            type="text"
            placeholder="Enter you name"
            required
          />
        </Form.Group>

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

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            ref={confirmPasswordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <p style={{color:'red'}}>{error}</p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p className="mt-3">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-danger cursor-pointer text-decoration-none"
          onClick={navigateToLogin}
        >
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Register;