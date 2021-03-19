import React, { ReactNode } from 'react';

import './Layout.scss';
import Header from '../Header';
import Footer from '../Footer';

interface LayoutInterface {
  children?: ReactNode;
  classNames?: string;
}

const Layout = ({ children, classNames }: LayoutInterface) => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <div className={classNames}>{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
