import React from 'react'

export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{ display: 'flex', alignItems: 'stretch' }}>
      <div style={{ border: '2px solid blue', minHeight: '70vh', flexBasis: '25%' }}>
        side bar
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}
