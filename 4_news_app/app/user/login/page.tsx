'use client';
import React from 'react'
import classes from "./login.module.css";
import { User } from '@phosphor-icons/react/dist/ssr/User';
import { Lock } from '@phosphor-icons/react/dist/ssr/Lock';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';

const Page = () => {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget['email'].value;
    const password = e.currentTarget['password'].value;
    console.log(email, password);

    const res = await fetch(
      '/api/auth/login',
      {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' }
      }
    );

    if (res.status === 200 /*res.ok*/) {
      const user = await res.json();
      console.log(user);
      // Store the user in Auth context (react context API)
      // and store the user in localStorage
      localStorage.setItem('auth-user', JSON.stringify(user));
      redirect('/');
    } else {
      toast.error("Your user name or password is invalid!", { position: 'top-center' });
    }
  }

  return (
    <div className={classes.loginContainer}>
      <h1 className={classes.loginTitle}>Welcome Back</h1>
      <p className={classes.loginDescription}>Please enter your credentials to login</p>

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
    </div>
  )
}

export default Page;