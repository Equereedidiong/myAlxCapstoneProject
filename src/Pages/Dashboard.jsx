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
      <audio ref = {audioRef} src={songs[0]} preload ='auto'></audio>
    </div>
  )
}


export default Dashboard;
