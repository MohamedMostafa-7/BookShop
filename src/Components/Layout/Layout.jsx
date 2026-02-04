import React from 'react'
import Style from './Layout.module.css'
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';


export default function Layout() {
    return (
        <div className="bg-[#F5F5F5]">
            <Navbar />
            <div className='min-h-screen mx-auto '>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

