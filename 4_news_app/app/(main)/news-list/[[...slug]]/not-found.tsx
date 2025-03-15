import React from 'react';
import img404 from '@/public/404.svg';
import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h3>The country or category you are looking for doesn&apos;t exist!</h3>
      <Image src={img404} alt="404" />
      <Link href="/categories">Go to categories page</Link>
    </div>
  )
}

export default NotFound;