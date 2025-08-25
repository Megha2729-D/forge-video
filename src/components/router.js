import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router'; // <-- change here!
import Navbar from './navbar';
import Home from './home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Navbar />
                <Home />
            </>
        ),
    },
]);

function Router() {
    return <RouterProvider router={router} />;
}

export default Router;
