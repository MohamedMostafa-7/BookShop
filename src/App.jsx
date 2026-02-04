import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Router'

export default function App() {
    return (
        <div className='mx-auto min-h-screen'>
            <RouterProvider router={router} />
        </div>
    )
}