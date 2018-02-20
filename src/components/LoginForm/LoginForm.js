import React from 'react';
import { Card, Button, TextField, SVGIcon } from 'react-md';
import { validateEmail } from '../../_helpers/emailValidation';
import * as icons from '../../assets/images/md_svg_icons';
import './LoginForm.css';

export const LoginForm = ({
  email,
  password,
  onChange,
  onSubmit,
  storeUser,
}) => {
  const validateForm = () => {
    return email.length && validateEmail(email) && password.length >= 6;
  };

  return (
    <Card className="LoginForm" name="LoginForm">
      <h1 className="LoginForm-title">S A G U A R O</h1>
      <form className="LoginForm-form">
        <TextField
          id="LoginForm-email"
          name="LoginForm-email"
          className="LoginForm-email"
          type="email"
          label="Your Email"
          value={email}
          placeholder="you@email.com"
          leftIcon={<SVGIcon>{icons.username}</SVGIcon>}
          onChange={value => onChange('email', value)}
          required
        />
        <TextField
          id="LoginForm-password"
          name="LoginForm-password"
          className="LoginForm-password"
          type="password"
          label="Your Password"
          value={password}
          placeholder=""
          minLength="6"
          leftIcon={<SVGIcon>{icons.password}</SVGIcon>}
          onChange={value => onChange('password', value)}
          required
        />
        <Button
          name="LoginForm-submit"
          className="LoginForm-submit"
          children="log in"
          flat
          type="submit"
          onClick={e => onSubmit(e)}
          disabled={!validateForm()}
        />
      </form>
    </Card>
  );
};

export default LoginForm;
