
import Categories from '@/components/categories/Categories';
import { Metadata } from 'next';
// import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Categories!',
  description: 'GSG News website, News Categories!'
}

const Page = () => {
  return (
    <div>
      <h1>Categories Page</h1>
      <Categories />
    </div>
  )
}

export default Page;