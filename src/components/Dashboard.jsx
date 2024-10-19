import React from 'react'
import SideNav from './SideNav' 
import Playback from './Playback';
import NavBar from './NavBar';
import Display from './Display';




const Dashboard = () => {
  return (
    
    <div className=' h-screen bg-black'>

      <div className=' h-[88%] flex'> 
        <SideNav />
        <Display />
      </div>

      <Playback />
    </div>
  )
}


export default Dashboard;
