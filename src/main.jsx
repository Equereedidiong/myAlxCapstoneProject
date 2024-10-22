//This file helped me implement routing for some of my navigating pages 

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App.jsx';
import './index.css';
import PlayerContextProvider from './components/context/PlayerContext.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx'; 
import Dashboard from './components/Dashboard.jsx';
import Login from './components/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,  
  },
  {
    path: "/dashboard",
    element: <Dashboard />,  
  },

  {
    path: "/Login",
    element: <Login />,  
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PlayerContextProvider>
      <RouterProvider router={router} />
    </PlayerContextProvider>
  </StrictMode>
);



//   <BrowserRouter>
//   <PlayerContextProvider>
//     <Dashboard />
//   </PlayerContextProvider> 

// </BrowserRouter>