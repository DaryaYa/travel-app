import React, { ReactNode } from 'react';

import './Layout.scss';
import Header from '../Header';
import Footer from '../Footer';

interface LayoutInterface {
  children: ReactNode;
}

const Layout = ({ children }: LayoutInterface) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
