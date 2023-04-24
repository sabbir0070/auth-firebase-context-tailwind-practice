import React from 'react'
import ReactDOM from 'react-dom/client';

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProviders from './Providers/AuthProviders';
import Order from './Components/Order/Order';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Profile from './Components/UserProfile/Profile';



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
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
       path:'/profile',
       element:<PrivateRoute> <Profile></Profile> </PrivateRoute>
      },
{
        path: 'order',
        element: <PrivateRoute><Order></Order></PrivateRoute>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router}></RouterProvider>
    </AuthProviders>
  </React.StrictMode>,
)
