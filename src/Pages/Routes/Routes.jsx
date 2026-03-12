import React, { Component } from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Home/Home';
import Layout from '../../Layout/Layout';
import Register from '../Register/Register';
import Login from '../Login/Login';


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
    }
   ]
   
  },
  {
    
  }
]);