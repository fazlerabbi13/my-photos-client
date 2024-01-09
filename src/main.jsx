import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './components/Root.jsx';
import Photos from './components/Photos.jsx';
import Photo from './components/Photo.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        path:'/photos',
        element:<Photos></Photos>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/photos')
      },
      {
        path:'/photo/:id',
        element:<Photo></Photo>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

