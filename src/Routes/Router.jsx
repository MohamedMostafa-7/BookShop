import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Books from '../Components/Pages/Books/Books'
import Aboutus from '../Components/Pages/Aboutus/Aboutus'
import Layout from '../Components/Layout/Layout'
import Notfound from '../Components/Pages/Notfound/Notfound'
import Home from './../Components/Pages/Home/Home';

export const router = createBrowserRouter([
    {
        path: '',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'books', element: <Books /> },
            { path: 'aboutus', element: <Aboutus /> },
            { path: '*', element: <Notfound /> },
        ]
    }
])