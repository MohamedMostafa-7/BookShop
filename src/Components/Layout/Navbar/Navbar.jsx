import React from 'react'
import Style from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"


export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header>
            <nav className={`${isScrolled ? "backdrop-blur-md bg-black/40": "bg-[#FFFFFF33]"} fixed w-full z-20 top-0 left-0 transition-all duration-300`}>
                <div className="max-w-345 flex flex-wrap items-center justify-between mx-auto p-6 ">
                    <div className="items-center justify-between w-full md:flex md:w-auto md:order-1 md:gap-6">
                        <Link to="/" className="flex items-center space-x-3">
                            <svg width="27" height="32" viewBox="0 0 27 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.66675 0H22.6667C24.8721 0 26.6667 1.79467 26.6667 4V28C26.6667 30.2053 24.8721 32 22.6667 32H8.01086e-05V2.66667C8.01086e-05 1.196 1.19608 0 2.66675 0ZM2.66675 24H18.6667V2.66667H13.3334V14.6667L10.0001 11.3333L6.66675 14.6667V2.66667H2.66675V24ZM22.6667 2.66667H21.3334V24H22.6667C23.1347 24 23.5827 24.0813 24.0001 24.2293V4C24.0001 3.26533 23.4014 2.66667 22.6667 2.66667ZM22.6667 29.3333C23.4014 29.3333 24.0001 28.7347 24.0001 28C24.0001 27.2653 23.4014 26.6667 22.6667 26.6667H2.66675V29.3333H22.6667Z" fill="white" />
                            </svg>

                            <span className="self-center text-white whitespace-nowrap">
                                Bookshop
                            </span>
                        </Link>
                        <span className='block h-8 border-r border-[#FFFFFF4D]'></span>
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 text-white border border-gray-200 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">

                            <li>
                                <Link to="/" className="block py-2 px-3 bg-[#EAA451] rounded md:bg-transparent md:text-[#EAA451] md:p-0">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link to="books" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#EAA451] md:p-0">
                                    Books
                                </Link>
                            </li>

                            <li>
                                <Link to="aboutus" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#EAA451] md:p-0">
                                    About us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center md:order-2 space-x-3">

                        <button
                            type="button"
                            className="flex text-sm bg-white rounded-full focus:ring-4 focus:ring-gray-300"
                            id="user-menu-button"
                        >
                            <span className="sr-only">Open user menu</span>
                            <img
                                className="w-8 h-8 rounded-full"
                                src="/docs/images/people/profile-picture-5.jpg"
                                alt="user photo"
                            />
                        </button>

                        <div className="z-50 hidden bg-white dark:bg-gray-700 border border-gray-200 rounded-lg shadow-lg w-44" id="user-dropdown">
                            <div className="px-4 py-3 text-sm border-b border-gray-200">
                                <span className="block font-medium">John Smith</span>
                                <span className="block text-gray-500 truncate">name@flowbite.com</span>
                            </div>

                            <ul className="p-2 text-sm font-medium">
                                <li>
                                    <a href="#" className="inline-flex items-center w-full p-2 hover:bg-gray-100 rounded">
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="inline-flex items-center w-full p-2 hover:bg-gray-100 rounded">
                                        Settings
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="inline-flex items-center w-full p-2 hover:bg-gray-100 rounded">
                                        Earnings
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="inline-flex items-center w-full p-2 hover:bg-gray-100 rounded">
                                        Sign out
                                    </a>
                                </li>
                            </ul>
                        </div>



                    </div>

                </div>
            </nav>

        </header>
    )
}

