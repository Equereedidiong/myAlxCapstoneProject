import React from 'react'
import { assets } from '../assets/Assets';

const AlbumItem = () => {
  return (

    <>
    
      <div className=' cursor-pointer hover: bg-[#ffffff26] ' >
         <img className='w-40 h-40 rounded-md 'src={assets.Zombie_icon} alt="" />
          <p className='font-medium mt-0 mb-0 text-sm py-1'>Zombie || 2024</p>
          <p className='text-slate-400 text-xs font-light'>Joeboy</p>     
        </div>
    
    </>

)
}

export default AlbumItem;