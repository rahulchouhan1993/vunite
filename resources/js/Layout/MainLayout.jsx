import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

const MainLayout = ({ children }) => {
  const colors = {
    primaryGreen: 'bg-[#2E8B83]',
    accentRed: 'bg-[#D97768]'
  };

  return (
    <div className="">
      <Header />

      {children}


<Footer />
      
    </div>
  );
};

export default MainLayout;
