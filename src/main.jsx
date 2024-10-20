import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App.jsx';
import './index.css';
import PlayerContextProvider from './components/context/PlayerContext.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';  // Assuming you have a Home component
import Dashboard from './components/Dashboard.jsx';
import Login from './components/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,  // Use `element` to render the component
  },
  {
    path: "/dashboard",
    element: <Dashboard />,  // Specify another path for Dashboard
  },

  {
    path: "/Login",
    element: <Login />,  // Specify another path for Login Page
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