import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Roots/Root';
import ErrorPage from '../Pagaes/ErrorPage';
import Home from '../Componants/Home';
import About from '../Pagaes/About';
import BookDetails from '../Pagaes/BookDetails';
import ReadList from '../Pagaes/ReadList';

  export  const router =createBrowserRouter([
  {
    path:"/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            loader:()=>fetch('/booksData.json'),
            path:"/",
            Component:Home
        },
        {
path:'/about',
Component:About
        },
        {
          path:'/bookDetails/:id',
          loader:()=>fetch('/booksData.json'),
          Component:BookDetails
        },
        {
          path:'/readlist',
          loader:()=>fetch('/booksData.json'),
          Component:ReadList
        }
    ]
  }
])

