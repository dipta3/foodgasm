import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Foods from '../../pages/Home/Foods/Foods';
import Home from '../../pages/Home/Home';
import ReviewForm from '../../pages/Review/ReviewForm/ReviewForm';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/foods',
                element: <Foods></Foods>
            },

            {
                path: '/foods/:id',
                element: <ReviewForm></ReviewForm>

            }
        ]
    }
])

export default router;