import React from 'react';
import Header from "@/components/header/Header";

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
