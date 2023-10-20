import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,  RouterProvider} from "react-router-dom";
import Root from './Pages/Root.jsx';
import Homepage from './Pages/Homepage.jsx';
import Biljett from './Pages/Biljett.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Homepage/>,
      },
      {
        path: "/biljett",
        element: <Biljett/>,
        
      }  
    ],
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
