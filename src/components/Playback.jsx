//This file is for controlling the play and pause Icons of the player

// import React, { useContext } from 'react'
import SideNav from './SideNav';
import Dashboard from './Dashboard';
// import { assets, songs, } from '../assets/Assets';
import PlayerContextProvider from './context/PlayerContext';
import { PlayerContext } from './context/PlayerContext';
import { playsong } from './SongItem'
import { songs2 } from '../assets/Assets';
import React, { useContext, useState, useRef, useEffect } from 'react';
import { songs } from '../assets/Assets'; 
import { assets } from '../assets/Assets'; 

export const Playback = () => {

    const [currentSongIndex, setCurrentSongIndex] = useState(0); // Track the current song index
    const [isPlaying, setIsPlaying] = useState(false); // Track if the song is playing
    const audioRef = useRef(new Audio(songs[currentSongIndex].file)); // Reference to the audio element
  
    // Play the current song
    const play = () => {
      audioRef.current.play();
      setIsPlaying(true);
    };
  
    // Pause the current song
    const pause = () => {
      audioRef.current.pause();
      setIsPlaying(false);
    };
  
    // Move to the next song
    const next = () => {
      setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length); // Loop back if at the end
    };
  
    // Move to the previous song
    const previous = () => {
      setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length); // Loop back if at the start
    };
  
    // When the current song changes, this hook will now load and play the new song
    useEffect(() => {
      audioRef.current.pause(); // to Pause song
      audioRef.current = new Audio(songs[currentSongIndex].file); // to Set the new song
      if (isPlaying) {
        play(); // to Play the new song 
      }
    }, [currentSongIndex]);


  return (
    <>


        <div className='w-[100%] bg-[#13191D] bg-transparent text-white px-8 py-2 h-[12%]'>

            <div className=' lg:flex justify-between '>
                <div className=' lg:flex items-center gap-4 '>
                    <img className='w-12 rounded' src={songs.image} alt="" />
                    <div>
                        <p>{songs.name}</p>
                        <p className='text-slate-500 font-light text-sm'>{songs.desc}</p>
                    </div >
                </div>
                <div>
                    <div className='flex flex-col items-center gap-1 m-auto'>

                        <div className='flex gap-6 py-2'>
                            <img onClick={previous} className=' w-4 cursor-pointer'src={assets.back_icon} alt="" />
                            <img onClick={isPlaying ? pause : play} className=' w-4 cursor-pointer'src={assets.play_icon} alt="" />
                            {/* <img onClick={pause} className=' w-4 cursor-pointer'src={assets.pause_icon} alt="" /> */}
                            <img onClick= {next} className=' w-4 cursor-pointer'src={assets.next_icon} alt="" />


                        </div>

                        <div className='flex items-center gap-4 justify-between'>
                            <p className='text-sm'>1:03</p>
                            <div className='w-[60vw] max-w-[500px] h-1 bg-gray-400 rounded-full cursor-pointer'>
                              <hr className='h-1 border-none w-10  bg-blue-700 rounded-full '/>
                            </div>
                            <p className='text-sm'>3:20</p>


                        </div>

                    </div>
                    
                </div>

                <div className='lg:flex items-center gap-2 opacity-75 pl-0'>
                  <img className='w-6'src={assets.volume_icon} alt="" />
                  <div className='w-20 bg-slate-50 h-1 rounded-full cursor-pointer '>
                  </div>              
                </div>
            </div>

        </div>
    </>

  )
}

export default Playback;