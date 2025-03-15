'use client';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

const Page = () => {
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('auth-user') || '{}');
    const token = localStorage.getItem('auth-token');
    if (!token || !user || user.role !== 'admin') {
      toast.warn("You don't have the permission to access this page!");
      redirect('/user/login');
    }
  }, []);

  return (
    <div>
      <h1>Admin Page</h1>
    </div>
  )
}

export default Page;