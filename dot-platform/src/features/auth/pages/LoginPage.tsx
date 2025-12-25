import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';

// TODO: form error handling
type FieldTypes = {
  email: string;
  password: string;
};

const LoginPage = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
