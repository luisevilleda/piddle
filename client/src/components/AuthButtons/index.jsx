import React from 'react';
import { Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';

const handleLoginClick = () => browserHistory.push('/login');
const handleSignupClick = () => browserHistory.push('/signup');

const AuthButtons = () =>
  (
    <div className="authButtons">
      <Button onClick={handleLoginClick}>Login</Button>
      <Button onClick={handleSignupClick}>Signup</Button>
    </div>
  );

export default AuthButtons;
