//This file components represents a song Item on my User Interface ready to accept mapping from a returned array of objects.

import React, { useContext } from 'react'
import { songs } from '../assets/Assets';
import { PlayerContext } from './context/PlayerContext';

export const playsong = () => {

    const audio = new Audio(file);
    audio.play();

}

function  SongItem ({ id, desc, name, image, file, }) {
//   console.log(song)



  return (

    <>
    
      <div onClick={playsong} className=' cursor-pointer hover:bg-[#ffffff26] ' >
         <img className='w-40 h-40 rounded-md 'src={image} alt="" />
          <p className='font-medium mt-0 mb-0 text-sm py-1'>{name}</p>
          <p className='text-slate-400 text-xs font-light'>{desc}</p>     
      </div>
    
    </>

)
}

export default SongItem; 