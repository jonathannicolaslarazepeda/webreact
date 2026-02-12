import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = () => {
    return (
        <>
            <div className="container">
                <Header />
                <Outlet />
            </div>
            <div className="scroll-watcher"></div>
            <Footer />
        </>
    );
};

export default Layout;
