import React from 'react'
import { assets } from '../assets/Assets';
// import {Display} from './Display';

const AlbumItem = ({albums}) => {
  return (

    <>
    
      <div className=' cursor-pointer hover:bg-[#ffffff26] ' >
         <img className='w-40 h-40 rounded-md 'src={albums.image.url} alt="" />
          <p className='font-medium mt-0 mb-0 text-sm py-1'>{albums.name}</p>
          <p className='text-slate-400 text-xs font-light'>Joeboy</p>     
      </div>
    
    </>

)
}

export default AlbumItem;