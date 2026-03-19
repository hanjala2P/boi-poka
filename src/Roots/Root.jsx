import React from 'react';
import Navbar from '../Componants/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Componants/Footer';

const Root = () => {
    return (
        <div className='mx-auto max-w-6xl'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;