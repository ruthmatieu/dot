import React, { useState } from 'react';

// TODO: form error handling
type FieldTypes = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [formData, setFormData] = useState<FieldTypes>({
    email: '',
    password: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log('formData: ', formData);
    // we will need to load the dashboard page once form is successful
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          {/* need input components */}
          <label htmlFor="emailInput">
            Email
            <input
              type="email"
              id="emailInput"
              name="email"
              value={formData.email}
              onChange={changeHandler}
            />
          </label>
        </div>
        <div>
          <label htmlFor="passwordInput">
            Password
            <input
              type="password"
              id="passwordInput"
              name="password"
              value={formData.password}
              onChange={changeHandler}
            />
          </label>
        </div>
        {/* need button components */}
        <button type="submit">Sign In</button>
      </form>
      {isSubmitted ? 'Thanks! Your dashboard will load soon' : null}
    </div>
  );
};

export default LoginPage;
