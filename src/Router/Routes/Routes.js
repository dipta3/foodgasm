import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Foods from '../../pages/Home/Foods/Foods';
import FoodsDetails from '../../pages/Home/Foods/FoodsDetails/FoodsDetails';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
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
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/foods/:id',
                element: <ReviewForm></ReviewForm>,
                loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id}`)

            },
            {
                path: '/foodsDetails/:id',
                element: <FoodsDetails></FoodsDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id}`)
            }
        ]
    }
])

export default router;