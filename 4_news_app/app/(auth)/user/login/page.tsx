import React from 'react';
import classes from "./login.module.css";
import LoginForm from '@/components/auth/login-form/LoginForm';

interface IProps {
  searchParams: Promise<{ msg: string }>;
}

const Page = async (props: IProps) => {
  const { msg } = (await props.searchParams);

  return (
    <div className={classes.loginContainer}>
      <p style={{ color: 'red' }}>{msg}</p>
      <h1 className={classes.loginTitle}>Welcome Back</h1>
      <p className={classes.loginDescription}>Please enter your credentials to login</p>
      <LoginForm />
    </div>
  )
}

export default Page;