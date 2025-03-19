'use client';
import React from 'react';
import classes from "./login.module.css";
import { verifyToken } from '@/utils/auth';
import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';

import Link from 'next/link';
import { User } from '@phosphor-icons/react/dist/icons/User';
import { Lock } from '@phosphor-icons/react/dist/icons/Lock';

const LoginForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget['email'].value;
    const password = e.currentTarget['password'].value;

    const res = await fetch(
      '/api/auth/login',
      {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' }
      }
    );

    if (res.status === 200 /*res.ok*/) {
      const token = await res.text();
      // Store the user in Auth context (react context API)
      // and store the user in localStorage

      localStorage.setItem('auth-token', token);

      // we need to await for the verify token as it's a server actions which will be async
      // This is a feature of next JS which allows you call a BE function directly from the FE
      const user = await verifyToken(token);

      // We have another option to just decode the token at FE, 
      // in this you don't need any secret code to do the decode
      // const user = jwt.decode(token);

      localStorage.setItem('auth-user', JSON.stringify(user));
      redirect('/');
    } else {
      toast.error("Your user name or password is invalid!", { position: 'top-center' });
    }
  }

  return (
    <form className={classes.loginForm} onSubmit={handleSubmit}>
      <div className={classes.formGroup} >
        <label htmlFor="email" className={classes.formLabel}>
          Email Address
        </label>
        <div className={classes.inputWrapper}>
          <User className={classes.inputIcon} size={18} />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            className={classes.formInput}
            required
          />
        </div>
      </div>

      <div className={classes.formGroup}>
        <div className={classes.labelWithLink}>
          <label htmlFor="password" className={classes.formLabel}>
            Password
          </label>
          <a href="#" className={classes.forgotPassword}>
            Forgot Password?
          </a>
        </div>
        <div className={classes.inputWrapper}>
          <Lock className={classes.inputIcon} size={18} />
          <input
            id="password"
            type="password"
            name="password"
            placeholder="••••••••"
            className={classes.formInput}
            required
          />
        </div>
      </div>

      <div className={classes.rememberMe}>
        <input type="checkbox" id="remember" className={classes.checkbox} />
        <label htmlFor="remember" className={classes.checkboxLabel}>
          Remember me
        </label>
      </div>

      <div className={classes.formGroup}>
        <button type="submit" className={classes.loginButton}>
          Login
        </button>
      </div>

      <div className={classes.signupPrompt}>
        <span>Don&apos;t have an account?</span>
        <Link href="/user/signup" className={classes.signupLink}>
          Sign up
        </Link>
      </div>
    </form>
  )
}

export default LoginForm;