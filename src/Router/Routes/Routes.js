import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Foods from '../../pages/Home/Foods/Foods';
import FoodsDetails from '../../pages/Home/Foods/FoodsDetails/FoodsDetails';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import ReviewForm from '../../pages/Review/ReviewForm/ReviewForm';
import Reviews from '../../pages/Reviews/Reviews';
import SignUp from '../../pages/SignUp/SignUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

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
                element: <PrivateRoute><Foods></Foods></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/reviews',
                element: <PrivateRoute><Reviews></Reviews></PrivateRoute>
            },
            {
                path: '/foods/:id',
                element: <PrivateRoute><ReviewForm></ReviewForm></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id}`)

            },
            {
                path: '/foodsDetails/:id',
                element: <PrivateRoute><FoodsDetails></FoodsDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id}`)
            }
        ]
    }
])

export default router;