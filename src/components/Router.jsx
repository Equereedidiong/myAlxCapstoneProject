import { useState } from 'react'
import viteLogo from '/vite.svg'
// import './App.css'
import './index.css'
import Login  from './components/Login'
// import { RouterProvider, createBrowserRouter, } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import SideNav from './components/SideNav';
import Playback from './components/Playback';
import NavBar from './components/NavBar';
import Display from './components/Display';
import Artistdp from './components/Artistdp';


function route() {
  return (
    <>

      {/* <div className = 'h-screen bg-black'>

        <div className = 'h-[90%] flex'>

          <Sidebar />

        </div>

      </div> */}
     <Router>
        <Routes>
        
          <Route path="/*" element={<Home />} /> 
          <Route path="/Login" element={<Login />} />
          <Route path="/Login/Dashboard" element={<Dashboard />} />
          <Route path="/Login/SideNav" element={<SideNav />} />
          <Route path="/Login/Playback" element={<Playback />} />
          <Route path="/Login/NavBar" element={<NavBar />} />
          {/* <Route path="/Login/AlbumItem" element={<AlbumItem />} /> */}
          <Route path="/Login/Display" element={<Display />} />
          <Route path="/Login/Artist" element={<Artistdp />} />

          {/* <Route path="/dashboard/Settings" element={<Settings/>} /> */}
        </Routes>

        
      </Router>

        {/* Use wildcard for the path with more */}
    </>
  );
}

export default route;