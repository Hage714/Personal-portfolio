"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import MenuOverlay from './MenuOverlay';
import index from '../pages/index';

const navLinks = [
    { title: 'About', path: '/about' },
    { title: 'Achievement', path: '/achievement' },
    { title: 'Projects', path: '/projectssection' },
    { title: 'Contact', path: '/emailsection' }

];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className='fixed mx-auto border border-slate-400 top-0 left-0 right-0 z-10 bg-gradient-to-br from-blue-400 via-blue-200 to-blue-500 bg-opacity-80'>
            <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
                <Link href="/" className='text-sm md:text-base lg:text-3xl text-black hover:text-white'>HAGE WOCHE</Link>

                <div className='mobile-menu block sm:hidden lg:hidden'>
                    <button
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        className='flex items-center px-3 py-2 border rounded border-blue-800 text-blue-800 hover:text-white hover:border-white'
                    >
                        {navbarOpen ? (
                            <XMarkIcon className="h-5 w-5" />
                        ) : (
                            <Bars3Icon className="h-5 w-5" />
                        )}
                    </button>
                </div>

                <div className={`menu ${navbarOpen ? 'hidden' : 'block'} sm:block sm:w-auto hidden lg:block lg:w-auto`} id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.path} className=" text-lg nav-link text-black hover:underline hover:text-white hover:text-xl">{link.title}</Link>

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen && <MenuOverlay links={navLinks} />}
        </nav>
    );
}

export default Navbar;
