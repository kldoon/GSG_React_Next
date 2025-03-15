import React from 'react'
import classes from "./login.module.css";
import LoginForm from '@/components/auth/login-form/LoginForm';

const Page = () => {
  return (
    <div className={classes.loginContainer}>
      <h1 className={classes.loginTitle}>Welcome Back</h1>
      <p className={classes.loginDescription}>Please enter your credentials to login</p>
      <LoginForm />
    </div>
  )
}

export default Page;