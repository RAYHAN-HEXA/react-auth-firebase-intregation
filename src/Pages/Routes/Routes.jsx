import React, { Component } from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Home/Home';
import Layout from '../../Layout/Layout';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Orders from '../../Components/Orders/Orders';
import PrivateRoutes from './PrivateRoutes';
import Profile from '../../Components/Profile/Profile';
import Dashboard from '../../Components/Dashboard/Dashboard';


export const router = createBrowserRouter([
  {
    path: "/",
   Component: Layout,
   children :[
    {
        index : true,
        Component : Home
    },
    {
        path : 'register',
        Component : Register
    },
     {
        path : 'login',
        Component : Login
    },
    {
        path : '/orders',
        element : <PrivateRoutes>
         <Orders></Orders>


            </PrivateRoutes>
    },
    {
        path : '/profile',
        element : <PrivateRoutes>
            <Profile></Profile>
        </PrivateRoutes>
    },
    {
        path :'dashboard',
        element : <PrivateRoutes>
        <Dashboard></Dashboard>
        </PrivateRoutes>
    }
   ]
   
  },
  {
    
  }
]);