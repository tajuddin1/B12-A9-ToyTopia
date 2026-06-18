import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';

const Root = () => {
  return (
    <div>
      <div className="bg-(--dark-2) z-50">
        <Navbar/>
      </div>
      <Outlet />
      <div className="bg-base-200">
        <Footer/>
      </div>
    </div>
  );
};

export default Root;