//This is my main components it houses all other components and is that which the user see's and interacts with the most after sigining into Flick.

import React, { useContext } from 'react'
import SideNav from './SideNav' 
import Playback from './Playback';
import NavBar from './NavBar';
import Display from './Display';
import { PlayerContext }  from './context/PlayerContext';
import { songs, songs2 } from '../assets/Assets';
// import PlayerContextProvider from './context/PlayerContext';



const Dashboard = () => {



  const {audioRef,track} = useContext(PlayerContext)
  

  return (
    
    <div className=' h-screen bg-black'>

      <div className=' h-[88%] flex'> 
        <SideNav />
        <Display />
      </div>

      <Playback />
      <audio ref = {audioRef} src={songs2[0]} preload ='auto'></audio> 
      {/* This did not work */}
    </div>
  )
}


export default Dashboard;
