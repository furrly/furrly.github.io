import React from 'react';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';

const HeaderLayout = ({ children }) => (
  <>
    <Header />
      <main className="site-content">
        {children}
      </main>
    <Footer />
  </>
);

export default HeaderLayout;